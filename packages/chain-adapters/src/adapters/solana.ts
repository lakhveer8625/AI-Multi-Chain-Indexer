import { Connection, PublicKey } from '@solana/web3.js';
import { ChainAdapter, DecodedEvent } from '../interfaces';
import { Block } from '@mci/shared';

export class SolanaAdapter implements ChainAdapter {
    private connection: Connection;
    private isConnected = false;

    constructor(
        public chainId: number,
        private rpcUrl: string,
        private wsUrl?: string
    ) {
        this.connection = new Connection(this.rpcUrl, {
            wsEndpoint: this.wsUrl,
            commitment: 'confirmed'
        });
    }

    async connect(): Promise<void> {
        const version = await this.connection.getVersion();
        this.isConnected = true;
        console.log(`Connected to Solana (version: ${version['solana-core']})`);
    }

    async disconnect(): Promise<void> {
        // Solana Web3.js Connection does not require explicit disconnect for RPC
        this.isConnected = false;
    }

    async getCurrentBlock(): Promise<number> {
        return await this.connection.getSlot();
    }

    async getBlock(blockNumber: number): Promise<Block> {
        const block = await this.connection.getBlock(blockNumber, {
            maxSupportedTransactionVersion: 0
        });

        if (!block) throw new Error(`Block ${blockNumber} not found`);

        return {
            number: blockNumber,
            hash: block.blockhash,
            parentHash: block.previousBlockhash,
            timestamp: block.blockTime || 0,
        };
    }

    async getLogs(fromBlock: number, toBlock: number, addresses?: string[]): Promise<DecodedEvent[]> {
        // Solana doesn't support range query for logs easily like EVM. 
        // Typically fetched via getSignaturesForAddress or iterating blocks.
        // For this POC, we'll assume we iterate blocks or use a specific strategy.
        // Returning empty for now as it requires complex implementation for range scan
        console.warn('Solana getLogs range scan not fully implemented in POC');
        return [];
    }

    subscribeToBlocks(callback: (blockNumber: number) => void): void {
        this.connection.onSlotChange((slotInfo) => {
            callback(slotInfo.slot);
        });
    }

    subscribeToLogs(callback: (event: DecodedEvent) => void, addresses?: string[]): void {
        if (!addresses || addresses.length === 0) {
            this.connection.onLogs('all', (logs, ctx) => {
                // Convert to DecodedEvent
                // Note: Solana logs are strings. Parsing requires knowledge of program.
                const event: DecodedEvent = {
                    chain_id: this.chainId,
                    block_number: ctx.slot,
                    tx_hash: logs.signature,
                    log_index: 0, // No specific log index in this context
                    event_signature: 'solana-log',
                    payload: logs.logs,
                    address: 'system' // Placeholder
                };
                callback(event);
            });
        } else {
            addresses.forEach(addr => {
                try {
                    const pubkey = new PublicKey(addr);
                    this.connection.onLogs(pubkey, (logs, ctx) => {
                        const event: DecodedEvent = {
                            chain_id: this.chainId,
                            block_number: ctx.slot,
                            tx_hash: logs.signature,
                            log_index: 0,
                            event_signature: 'solana-program-log',
                            payload: logs.logs,
                            address: addr
                        };
                        callback(event);
                    });
                } catch (e) {
                    console.error(`Invalid public key: ${addr}`);
                }
            });
        }
    }
}
