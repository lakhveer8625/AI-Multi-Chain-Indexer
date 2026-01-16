import { ethers } from 'ethers';
import { ChainAdapter, DecodedEvent } from '../interfaces';
import { Block } from '@mci/shared';
import { createErrorLogger, ErrorLogger } from '@mci/shared';

export class EVMAdapter implements ChainAdapter {
    private provider: ethers.JsonRpcProvider | ethers.WebSocketProvider;
    private isConnected = false;
    private errorLogger: ErrorLogger;

    constructor(
        public chainId: number,
        private rpcUrl: string,
        private wsUrl?: string
    ) {
        this.errorLogger = createErrorLogger(`EVMAdapter-Chain-${chainId}`);

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
            await this.errorLogger.executeWithRetry(
                async () => await this.provider.getNetwork(),
                'RPC_ERROR',
                { chainId: this.chainId, rpcEndpoint: this.rpcUrl, operationType: 'connect' }
            );
            this.isConnected = true;
            console.log(`✓ Connected to chain ${this.chainId}`);
        } catch (error) {
            await this.errorLogger.logError(
                error,
                'RPC_ERROR',
                { chainId: this.chainId, rpcEndpoint: this.rpcUrl, operationType: 'connect' },
                'CRITICAL'
            );
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        try {
            this.provider.destroy();
            this.isConnected = false;
            console.log(`✓ Disconnected from chain ${this.chainId}`);
        } catch (error) {
            await this.errorLogger.logError(
                error,
                'RPC_ERROR',
                { chainId: this.chainId, operationType: 'disconnect' },
                'WARNING'
            );
        }
    }

    async getCurrentBlock(): Promise<number> {
        return await this.errorLogger.executeWithRetry(
            async () => await this.provider.getBlockNumber(),
            'RPC_ERROR',
            { chainId: this.chainId, operationType: 'getCurrentBlock' }
        );
    }

    async getBlock(blockNumber: number, includeTransactions = false): Promise<Block> {
        try {
            const block = await this.errorLogger.executeWithRetry(
                async () => await this.provider.getBlock(blockNumber, includeTransactions),
                'RPC_ERROR',
                { chainId: this.chainId, blockNumber, operationType: 'getBlock' }
            );

            if (!block) {
                throw new Error(`Block ${blockNumber} not found`);
            }

            const result: Block = {
                number: block.number,
                hash: block.hash!,
                parentHash: block.parentHash,
                timestamp: block.timestamp,
            };

            if (includeTransactions && block && block.transactions) {
                console.log(`[EVMAdapter] Block ${blockNumber} has ${block.transactions.length} transactions`);
                const txHashesOrTxs = block.transactions;
                const transactions: (DecodedEvent | null)[] = [];

                // Process in optimized chunks with retry logic
                const chunkSize = 10;
                for (let i = 0; i < txHashesOrTxs.length; i += chunkSize) {
                    const chunk = txHashesOrTxs.slice(i, i + chunkSize);
                    const results = await Promise.all(chunk.map(async (txHashOrTx: string | ethers.TransactionResponse) => {
                        try {
                            const tx = typeof txHashOrTx === 'string'
                                ? await this.errorLogger.executeWithRetry(
                                    async () => await this.provider.getTransaction(txHashOrTx),
                                    'RPC_ERROR',
                                    { chainId: this.chainId, blockNumber, txHash: txHashOrTx, operationType: 'getTransaction' },
                                    2 // Less retries for individual txs
                                )
                                : txHashOrTx;

                            if (!tx) return null;

                            const receipt = await this.errorLogger.executeWithRetry(
                                async () => await this.provider.getTransactionReceipt(tx.hash),
                                'RPC_ERROR',
                                { chainId: this.chainId, blockNumber, txHash: tx.hash, operationType: 'getTransactionReceipt' },
                                2
                            );

                            return this.parseTransaction(tx, receipt, block as any);
                        } catch (e) {
                            await this.errorLogger.logError(
                                e,
                                'RPC_ERROR',
                                { chainId: this.chainId, blockNumber, operationType: 'parseTransaction' },
                                'WARNING'
                            );
                            return null;
                        }
                    }));
                    transactions.push(...results);

                    // Rate limiting
                    if (i + chunkSize < txHashesOrTxs.length) {
                        await new Promise(resolve => setTimeout(resolve, 200));
                    }
                }
                result.transactions = transactions.filter((t): t is DecodedEvent => t !== null);
            }

            return result;
        } catch (error) {
            await this.errorLogger.logError(
                error,
                'RPC_ERROR',
                { chainId: this.chainId, blockNumber, operationType: 'getBlock' },
                'ERROR'
            );
            throw error;
        }
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
        try {
            const logs = await this.errorLogger.executeWithRetry(
                async () => await this.provider.getLogs({
                    fromBlock,
                    toBlock,
                    address: addresses,
                }),
                'RPC_ERROR',
                { chainId: this.chainId, blockNumber: fromBlock, operationType: 'getLogs' }
            );

            if (!logs || logs.length === 0) {
                return [];
            }

            // Optimization: Fetch unique transactions in this batch
            const txHashes = Array.from(new Set(logs.map(l => l.transactionHash)));
            const txMap = new Map<string, { tx: ethers.TransactionResponse | null, receipt: ethers.TransactionReceipt | null }>();

            // Fetch in chunks to avoid RPC rate limits
            const chunkSize = 10;
            for (let i = 0; i < txHashes.length; i += chunkSize) {
                const chunk = txHashes.slice(i, i + chunkSize);
                await Promise.all(chunk.map(async (hash) => {
                    try {
                        const [tx, receipt] = await this.errorLogger.executeWithRetry(
                            async () => {
                                const [t, r] = await Promise.all([
                                    this.provider.getTransaction(hash),
                                    this.provider.getTransactionReceipt(hash)
                                ]);
                                if (!t || !r) {
                                    throw new Error("Missing tx or receipt");
                                }
                                return [t, r] as [ethers.TransactionResponse, ethers.TransactionReceipt];
                            },
                            'RPC_ERROR',
                            { chainId: this.chainId, txHash: hash, operationType: 'getTransactionData' },
                            3
                        );
                        txMap.set(hash, { tx, receipt });
                    } catch (e) {
                        await this.errorLogger.logError(
                            e,
                            'RPC_ERROR',
                            { chainId: this.chainId, txHash: hash, operationType: 'getTransactionData' },
                            'WARNING'
                        );
                        txMap.set(hash, { tx: null, receipt: null });
                    }
                }));

                // Rate limiting between chunks
                if (i + chunkSize < txHashes.length) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                }
            }

            return logs.map(log => this.parseLogWithTx(log, txMap.get(log.transactionHash) || { tx: null, receipt: null }));
        } catch (error) {
            await this.errorLogger.logError(
                error,
                'RPC_ERROR',
                { chainId: this.chainId, blockNumber: fromBlock, operationType: 'getLogs' },
                'ERROR'
            );
            return [];
        }
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
        try {
            this.provider.on('block', async (blockNumber: number) => {
                try {
                    callback(blockNumber);
                } catch (error) {
                    await this.errorLogger.logError(
                        error,
                        'PROCESSING_ERROR',
                        { chainId: this.chainId, blockNumber, operationType: 'blockCallback' },
                        'WARNING'
                    );
                }
            });
        } catch (error) {
            this.errorLogger.logError(
                error,
                'WEBSOCKET_ERROR',
                { chainId: this.chainId, operationType: 'subscribeToBlocks' },
                'CRITICAL'
            );
        }
    }

    subscribeToLogs(callback: (event: DecodedEvent) => void, addresses?: string[]): void {
        try {
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
                    await this.errorLogger.logError(
                        err,
                        'RPC_ERROR',
                        { chainId: this.chainId, txHash: log.transactionHash, operationType: 'logSubscriptionData' },
                        'WARNING'
                    );

                    // Fallback to basic parsing if tx fetch fails
                    try {
                        const decoded = this.parseLog(log);
                        callback(decoded);
                    } catch (e) {
                        await this.errorLogger.logError(
                            e,
                            'PROCESSING_ERROR',
                            { chainId: this.chainId, txHash: log.transactionHash, operationType: 'parseLog' },
                            'ERROR'
                        );
                    }
                }
            });
        } catch (error) {
            this.errorLogger.logError(
                error,
                'WEBSOCKET_ERROR',
                { chainId: this.chainId, operationType: 'subscribeToLogs' },
                'CRITICAL'
            );
        }
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
