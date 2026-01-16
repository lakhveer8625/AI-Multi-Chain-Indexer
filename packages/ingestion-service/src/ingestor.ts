import { ChainAdapter, DecodedEvent, EVMAdapter, SolanaAdapter } from '@mci/chain-adapters';
import { EventPublisher } from './publisher';
import { prisma } from '@mci/database';
import { CHAIN_IDS, createErrorLogger, ErrorLogger } from '@mci/shared';

export class IngestionService {
    private adapters: Map<number, ChainAdapter> = new Map();
    private publisher: EventPublisher;
    private errorLogger: ErrorLogger;

    constructor(redisUrl: string) {
        this.publisher = new EventPublisher(redisUrl);
        this.errorLogger = createErrorLogger('ingestion-service');
    }

    async init() {
        try {
            console.log('Loading chains from database...');
            const chains = await this.errorLogger.executeWithRetry(
                async () => await prisma.chain.findMany({ where: { type: 'EVM' } }),
                'DATABASE_ERROR',
                { operationType: 'loadChains' }
            );

            for (const chain of chains) {
                try {
                    console.log(`Initializing adapter for chain ${chain.chainId} with RPC: ${chain.rpcUrl}`);
                    this.addAdapter(new EVMAdapter(chain.chainId, chain.rpcUrl));
                } catch (error) {
                    await this.errorLogger.logError(
                        error,
                        'PROCESSING_ERROR',
                        { chainId: chain.chainId, operationType: 'initAdapter' },
                        'ERROR'
                    );
                }
            }
            console.log(`✓ Initialized ${chains.length} chain adapters`);
        } catch (error) {
            await this.errorLogger.logError(
                error,


                'DATABASE_ERROR',
                { operationType: 'init' },
                'CRITICAL'
            );
            throw error;
        }
    }

    addAdapter(adapter: ChainAdapter) {
        this.adapters.set(adapter.chainId, adapter);
    }

    async start() {
        console.log('Starting Ingestion Service...');

        for (const [chainId, adapter] of this.adapters) {
            try {
                await adapter.connect();

                // Subscribe to blocks to track height and fetch logs
                adapter.subscribeToBlocks(async (blockNum) => {
                    console.log(`[Chain ${chainId}] New Block: ${blockNum}`);
                    try {
                        const block = await adapter.getBlock(blockNum, true);

                        // 1. Index Transactions
                        if (block.transactions) {
                            console.log(`[Chain ${chainId}] Indexing ${block.transactions.length} transactions from block ${blockNum}`);
                            for (const tx of block.transactions) {
                                await this.handleEvent(tx, chainId);
                            }
                        }

                        // 2. Index Logs
                        const logs = await adapter.getLogs(blockNum, blockNum);
                        console.log(`[Chain ${chainId}] Fetched ${logs.length} logs for block ${blockNum}`);
                        for (const log of logs) {
                            await this.handleEvent(log, chainId);
                        }
                    } catch (e) {
                        await this.errorLogger.logError(
                            e,
                            'PROCESSING_ERROR',
                            { chainId, blockNumber: blockNum, operationType: 'processBlock' },
                            'ERROR'
                        );
                    }
                });

                console.log(`✓ Started indexing chain ${chainId}`);
            } catch (err) {
                await this.errorLogger.logError(
                    err,
                    'PROCESSING_ERROR',
                    { chainId, operationType: 'startChain' },
                    'CRITICAL'
                );
            }
        }
        console.log(`✓ Ingestion service started for ${this.adapters.size} chains`);
    }

    private async handleEvent(event: DecodedEvent, chainId: number) {
        try {
            // 1. Basic Validation
            if (!event.tx_hash || !event.address) {
                return;
            }

            // 2. Publish to Queue
            await this.errorLogger.executeWithRetry(
                async () => await this.publisher.publish(event),
                'PROCESSING_ERROR',
                { chainId, txHash: event.tx_hash, operationType: 'publishEvent' },
                2
            );
        } catch (err) {
            await this.errorLogger.logError(
                err,
                'PROCESSING_ERROR',
                { chainId, txHash: event.tx_hash, operationType: 'handleEvent' },
                'WARNING'
            );
        }
    }
}
