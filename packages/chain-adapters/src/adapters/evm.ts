import { ethers } from 'ethers';
import { ChainAdapter, DecodedEvent } from '../interfaces';
import { Block } from '@mci/shared';

export class EVMAdapter implements ChainAdapter {
    private provider: ethers.JsonRpcProvider | ethers.WebSocketProvider;
    private isConnected = false;

    constructor(
        public chainId: number,
        private rpcUrl: string,
        private wsUrl?: string
    ) {
        if (this.wsUrl) {
            this.provider = new ethers.WebSocketProvider(this.wsUrl);
        } else {
            this.provider = new ethers.JsonRpcProvider(this.rpcUrl, undefined, {
                staticNetwork: true,
                batchMaxCount: 1 // Disable batching to avoid 400 errors from strict RPCs
            });
        }
    }

    async connect(): Promise<void> {
        try {
            await this.provider.getNetwork();
            this.isConnected = true;
            console.log(`Connected to chain ${this.chainId}`);
        } catch (error) {
            console.error(`Failed to connect to chain ${this.chainId}:`, error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        this.provider.destroy();
        this.isConnected = false;
    }

    async getCurrentBlock(): Promise<number> {
        return await this.provider.getBlockNumber();
    }

    async getBlock(blockNumber: number, includeTransactions = false): Promise<Block> {
        const block = await this.provider.getBlock(blockNumber, includeTransactions);
        if (!block) throw new Error(`Block ${blockNumber} not found`);

        const result: Block = {
            number: block.number,
            hash: block.hash!,
            parentHash: block.parentHash,
            timestamp: block.timestamp,
        };

        if (includeTransactions && block && block.transactions) {
            console.log(`[EVMAdapter] Block ${blockNumber} has ${block.transactions.length} transactions`);
            // Include transactions as decoded events
            const txHashesOrTxs = block.transactions;
            const transactions: (DecodedEvent | null)[] = [];

            // Process in small serial chunks to avoid rate limits
            const chunkSize = 10;
            for (let i = 0; i < txHashesOrTxs.length; i += chunkSize) {
                const chunk = txHashesOrTxs.slice(i, i + chunkSize);
                const results = await Promise.all(chunk.map(async (txHashOrTx: string | ethers.TransactionResponse) => {
                    try {
                        const tx = typeof txHashOrTx === 'string'
                            ? await this.provider.getTransaction(txHashOrTx)
                            : txHashOrTx;

                        if (!tx) return null;
                        const receipt = await this.provider.getTransactionReceipt(tx.hash);
                        return this.parseTransaction(tx, receipt, block as any);
                    } catch (e) {
                        console.error(`Error fetching tx in getBlock for ${blockNumber}:`, e);
                        return null;
                    }
                }));
                transactions.push(...results);
                if (txHashesOrTxs.length > chunkSize) {
                    await new Promise(resolve => setTimeout(resolve, 200)); // Small pause between chunks
                }
            }
            result.transactions = transactions.filter((t): t is DecodedEvent => t !== null);
        }

        return result;
    }

    private parseTransaction(tx: ethers.TransactionResponse, receipt: ethers.TransactionReceipt | null, block: ethers.Block): DecodedEvent {
        return {
            chain_id: this.chainId,
            block_number: block.number,
            tx_hash: tx.hash,
            log_index: -1, // -1 indicates a transaction-level event, not a log
            event_signature: 'Transaction',
            payload: {
                data: tx.data,
                value: tx.value.toString()
            },
            address: tx.to || '0x0000000000000000000000000000000000000000',
            tx_from: tx.from,
            tx_to: tx.to || undefined,
            tx_value: tx.value.toString(),
            gas_limit: tx.gasLimit.toString(),
            max_fee_per_gas: tx.maxFeePerGas?.toString(),
            max_priority_fee_per_gas: tx.maxPriorityFeePerGas?.toString(),
            input: tx.data,
            nonce: tx.nonce,
            tx_type: tx.type ?? undefined,
            gas_used: receipt?.gasUsed.toString(),
            gas_price: receipt?.gasPrice?.toString() || tx.gasPrice?.toString(),
            effective_gas_price: receipt?.gasPrice?.toString(),
            transaction_index: receipt?.index
        };
    }

    async getLogs(fromBlock: number, toBlock: number, addresses?: string[]): Promise<DecodedEvent[]> {
        const logs = await this.provider.getLogs({
            fromBlock,
            toBlock,
            address: addresses,
        });

        // Optimization: Fetch unique transactions in this batch
        const txHashes = Array.from(new Set(logs.map(l => l.transactionHash)));
        const txMap = new Map<string, { tx: ethers.TransactionResponse | null, receipt: ethers.TransactionReceipt | null }>();

        // Fetch in chunks to avoid RPC rate limits
        const chunkSize = 10;
        for (let i = 0; i < txHashes.length; i += chunkSize) {
            const chunk = txHashes.slice(i, i + chunkSize);
            await Promise.all(chunk.map(async (hash) => {
                let attempts = 0;
                const maxAttempts = 3;
                const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

                while (attempts < maxAttempts) {
                    try {
                        const [tx, receipt] = await Promise.all([
                            this.provider.getTransaction(hash),
                            this.provider.getTransactionReceipt(hash)
                        ]);
                        if (tx && receipt) {
                            txMap.set(hash, { tx, receipt });
                            return;
                        }
                        throw new Error("Missing tx or receipt");
                    } catch (e) {
                        attempts++;
                        if (attempts === maxAttempts) {
                            console.error(`Failed to fetch tx/receipt ${hash} after ${maxAttempts} attempts:`, (e as any).message);
                            txMap.set(hash, { tx: null, receipt: null });
                        } else {
                            await delay(500 * attempts);
                        }
                    }
                }
            }));
            if (txHashes.length > chunkSize) {
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }

        return logs.map(log => this.parseLogWithTx(log, txMap.get(log.transactionHash) || { tx: null, receipt: null }));
    }

    private parseLogWithTx(log: ethers.Log, data: { tx: ethers.TransactionResponse | null, receipt: ethers.TransactionReceipt | null }): DecodedEvent {
        const event = this.parseLog(log);
        if (data.tx) {
            event.tx_from = data.tx.from;
            event.tx_to = data.tx.to || undefined;
            event.tx_value = data.tx.value.toString();
            event.gas_limit = data.tx.gasLimit.toString();
            event.max_fee_per_gas = data.tx.maxFeePerGas?.toString();
            event.max_priority_fee_per_gas = data.tx.maxPriorityFeePerGas?.toString();
            event.input = data.tx.data;
            event.nonce = data.tx.nonce;
            event.tx_type = data.tx.type ?? undefined;
        }
        if (data.receipt) {
            event.gas_used = data.receipt.gasUsed.toString();
            event.gas_price = data.receipt.gasPrice?.toString() || data.tx?.gasPrice?.toString();
            event.effective_gas_price = data.receipt.gasPrice?.toString();
            event.transaction_index = data.receipt.index;
        }
        return event;
    }

    subscribeToBlocks(callback: (blockNumber: number) => void): void {
        this.provider.on('block', callback);
    }

    subscribeToLogs(callback: (event: DecodedEvent) => void, addresses?: string[]): void {
        const filter = addresses ? { address: addresses } : {};
        this.provider.on(filter, async (log) => {
            try {
                // To get gas data and addresses, we need tx/receipt
                const [tx, receipt] = await Promise.all([
                    this.provider.getTransaction(log.transactionHash),
                    this.provider.getTransactionReceipt(log.transactionHash)
                ]);

                const decoded = this.parseLogWithTx(log, { tx, receipt });
                callback(decoded);
            } catch (err) {
                console.error('Error in log subscription:', err);
                // Fallback to basic parsing if tx fetch fails
                try {
                    const decoded = this.parseLog(log);
                    callback(decoded);
                } catch (e) { }
            }
        });
    }

    private parseLog(log: ethers.Log | ethers.LogDescription): DecodedEvent {
        // Note: In real implementation, strict type checking needed here as ethers.Log has different shape
        // Assuming standard log object for now
        const l = log as any; // Cast for simplicity in this snippet

        return {
            chain_id: this.chainId,
            block_number: l.blockNumber,
            tx_hash: l.transactionHash,
            log_index: l.index,
            event_signature: l.topics[0] || '0x',
            payload: {
                topics: l.topics,
                data: l.data
            },
            address: l.address
        };
    }
}
