import { Connection, PublicKey } from '@solana/web3.js';
import { ChainAdapter, DecodedEvent } from '../interfaces';
import { Block } from '@mci/shared';
import { createErrorLogger, ErrorLogger } from '@mci/shared';

export class SolanaAdapter implements ChainAdapter {
    private connection: Connection;
    private isConnected = false;
    private errorLogger: ErrorLogger;

    constructor(
        public chainId: number,
        private rpcUrl: string,
        private wsUrl?: string
    ) {
        this.errorLogger = createErrorLogger(`SolanaAdapter-Chain-${chainId}`);
        this.connection = new Connection(this.rpcUrl, {
            wsEndpoint: this.wsUrl,
            commitment: 'confirmed'
        });
    }

    async connect(): Promise<void> {
        try {
            const version = await this.errorLogger.executeWithRetry(
                async () => await this.connection.getVersion(),
                'RPC_ERROR',
                { chainId: this.chainId, rpcEndpoint: this.rpcUrl, operationType: 'connect' }
            );
            this.isConnected = true;
            console.log(`✓ Connected to Solana (version: ${version['solana-core']})`);
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
            this.isConnected = false;
            console.log(`✓ Disconnected from Solana chain ${this.chainId}`);
        } catch (error) {
            await this.errorLogger.logError(
                error,
                'UNKNOWN_ERROR',
                { chainId: this.chainId, operationType: 'disconnect' },
                'WARNING'
            );
        }
    }

    async getCurrentBlock(): Promise<number> {
        return await this.errorLogger.executeWithRetry(
            async () => await this.connection.getSlot(),
            'RPC_ERROR',
            { chainId: this.chainId, operationType: 'getCurrentBlock' }
        );
    }

    async getBlock(blockNumber: number): Promise<Block> {
        try {
            const block = await this.errorLogger.executeWithRetry(
                async () => await this.connection.getBlock(blockNumber, {
                    maxSupportedTransactionVersion: 0
                }),
                'RPC_ERROR',
                { chainId: this.chainId, blockNumber, operationType: 'getBlock' }
            );

            if (!block) {
                throw new Error(`Block ${blockNumber} not found`);
            }

            return {
                number: blockNumber,
                hash: block.blockhash,
                parentHash: block.previousBlockhash,
                timestamp: block.blockTime || 0,
            };
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

    async getLogs(fromBlock: number, toBlock: number, addresses?: string[]): Promise<DecodedEvent[]> {
        // Solana doesn't support range query for logs easily like EVM. 
        // Typically fetched via getSignaturesForAddress or iterating blocks.
        // For this POC, we'll assume we iterate blocks or use a specific strategy.
        // Returning empty for now as it requires complex implementation for range scan
        console.warn('Solana getLogs range scan not fully implemented in POC');
        return [];
    }

    subscribeToBlocks(callback: (blockNumber: number) => void): void {
        try {
            this.connection.onSlotChange(async (slotInfo) => {
                try {
                    callback(slotInfo.slot);
                } catch (error) {
                    await this.errorLogger.logError(
                        error,
                        'PROCESSING_ERROR',
                        { chainId: this.chainId, blockNumber: slotInfo.slot, operationType: 'blockCallback' },
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
            if (!addresses || addresses.length === 0) {
                this.connection.onLogs('all', async (logs, ctx) => {
                    try {
                        const event: DecodedEvent = {
                            chain_id: this.chainId,
                            block_number: ctx.slot,
                            tx_hash: logs.signature,
                            log_index: 0,
                            event_signature: 'solana-log',
                            payload: logs.logs,
                            address: 'system'
                        };
                        callback(event);
                    } catch (err) {
                        await this.errorLogger.logError(
                            err,
                            'PROCESSING_ERROR',
                            { chainId: this.chainId, blockNumber: ctx.slot, operationType: 'logCallback' },
                            'ERROR'
                        );
                    }
                });
            } else {
                addresses.forEach(addr => {
                    try {
                        const pubkey = new PublicKey(addr);
                        this.connection.onLogs(pubkey, async (logs, ctx) => {
                            try {
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
                            } catch (err) {
                                await this.errorLogger.logError(
                                    err,
                                    'PROCESSING_ERROR',
                                    { chainId: this.chainId, blockNumber: ctx.slot, operationType: 'programLogCallback' },
                                    'ERROR'
                                );
                            }
                        });
                    } catch (e) {
                        this.errorLogger.logError(
                            e,
                            'VALIDATION_ERROR',
                            { chainId: this.chainId, additionalData: { address: addr }, operationType: 'invalidPublicKey' },
                            'WARNING'
                        );
                    }
                });
            }
        } catch (error) {
            this.errorLogger.logError(
                error,
                'WEBSOCKET_ERROR',
                { chainId: this.chainId, operationType: 'subscribeToLogs' },
                'CRITICAL'
            );
        }
    }
}
