import { ChainAdapter, DecodedEvent, EVMAdapter, SolanaAdapter } from '@mci/chain-adapters';
import { EventPublisher } from './publisher';
import { prisma } from '@mci/database';
import { CHAIN_IDS } from '@mci/shared';

export class IngestionService {
    private adapters: Map<number, ChainAdapter> = new Map();
    private publisher: EventPublisher;

    constructor(redisUrl: string) {
        this.publisher = new EventPublisher(redisUrl);
    }

    async init() {
        console.log('Loading chains from database...');
        const chains = await prisma.chain.findMany({ where: { type: 'EVM' } });

        for (const chain of chains) {
            console.log(`Initializing adapter for chain ${chain.chainId} with RPC: ${chain.rpcUrl}`);
            this.addAdapter(new EVMAdapter(chain.chainId, chain.rpcUrl));
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

                // Also subscribe to blocks to track height and fetch logs
                adapter.subscribeToBlocks(async (blockNum) => {
                    console.log(`[Chain ${chainId}] New Block: ${blockNum}`);
                    try {
                        const block = await adapter.getBlock(blockNum, true);

                        // 1. Index Transactions
                        if (block.transactions) {
                            console.log(`[Chain ${chainId}] Indexing ${block.transactions.length} transactions from block ${blockNum}`);
                            for (const tx of block.transactions) {
                                this.handleEvent(tx);
                            }
                        }

                        // 2. Index Logs (redundant if transactions above covers them, but currently getLogs might get more info or were the primary source)
                        // Actually, parseTransaction above already creates DecodedEvent for each tx.
                        // But native eth txs don't have logIndex.
                        const logs = await adapter.getLogs(blockNum, blockNum);
                        console.log(`[Chain ${chainId}] Fetched ${logs.length} logs for block ${blockNum}`);
                        for (const log of logs) {
                            this.handleEvent(log);
                        }
                    } catch (e) {
                        console.error(`Error fetching block/logs for block ${blockNum}:`, e);
                    }
                });

                console.log(`Started indexing chain ${chainId}`);
            } catch (err) {
                console.error(`Failed to start chain ${chainId}`, err);
            }
        }
    }

    private async handleEvent(event: DecodedEvent) {
        try {
            // 1. Basic Validation
            if (!event.tx_hash || !event.address) return;

            // 2. Publish to Queue
            await this.publisher.publish(event);

        } catch (err) {
            console.error('Error handling event:', err);
        }
    }
}
