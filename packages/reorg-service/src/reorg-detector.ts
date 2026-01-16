import { prisma } from '@mci/database';
import { EVMAdapter } from '@mci/chain-adapters';
import { sleep, createErrorLogger, ErrorLogger } from '@mci/shared';

const DEPTH_TO_CHECK = 12; // Check last 12 blocks for reorgs

export class ReorgDetector {
    private adapters: Map<number, EVMAdapter> = new Map();
    private isRunning = false;
    private errorLogger: ErrorLogger;

    constructor() {
        this.errorLogger = createErrorLogger('reorg-service');
    }

    private async getAdapter(chainId: number, rpcUrl: string): Promise<EVMAdapter> {
        if (!this.adapters.has(chainId)) {
            this.adapters.set(chainId, new EVMAdapter(chainId, rpcUrl));
        }
        return this.adapters.get(chainId)!;
    }

    public async start() {
        this.isRunning = true;
        console.log('Reorg detector started...');

        while (this.isRunning) {
            try {
                const chains = await this.errorLogger.executeWithRetry(
                    async () => await prisma.chain.findMany({ where: { type: 'EVM' } }),
                    'DATABASE_ERROR',
                    { operationType: 'fetchChains' }
                );

                for (const chain of chains) {
                    try {
                        await this.checkChain(chain.chainId, chain.rpcUrl);
                    } catch (error) {
                        await this.errorLogger.logError(
                            error,
                            'PROCESSING_ERROR',
                            { chainId: chain.chainId, operationType: 'checkChain' },
                            'ERROR'
                        );
                    }
                }

            } catch (error) {
                await this.errorLogger.logError(
                    error,
                    'PROCESSING_ERROR',
                    { operationType: 'reorgLoop' },
                    'CRITICAL'
                );
            }

            await sleep(10000); // Check every 10 seconds
        }
    }

    private async checkChain(chainId: number, rpcUrl: string) {
        const adapter = await this.getAdapter(chainId, rpcUrl);

        // Get last N blocks from DB
        const recentBlocks = await this.errorLogger.executeWithRetry(
            async () => await prisma.block.findMany({
                where: { chainId, isCanonical: true },
                orderBy: { number: 'desc' },
                take: DEPTH_TO_CHECK
            }),
            'DATABASE_ERROR',
            { chainId, operationType: 'fetchRecentBlocks' }
        );

        if (recentBlocks.length === 0) return;

        for (const localBlock of recentBlocks) {
            try {
                const remoteBlock = await adapter.getBlock(Number(localBlock.number));

                if (!remoteBlock) {
                    await this.errorLogger.logError(
                        `Block ${localBlock.number} not found on chain ${chainId}`,
                        'RPC_ERROR',
                        { chainId, blockNumber: localBlock.number, operationType: 'verifyBlock' },
                        'WARNING'
                    );
                    continue;
                }

                if (remoteBlock.hash !== localBlock.hash) {
                    console.warn(`REORG DETECTED on Chain ${chainId} Block ${localBlock.number}!`);
                    console.warn(`Local: ${localBlock.hash}, Remote: ${remoteBlock.hash}`);

                    await this.errorLogger.logError(
                        `Reorg detected on block ${localBlock.number}`,
                        'PROCESSING_ERROR',
                        {
                            chainId,
                            blockNumber: localBlock.number,
                            additionalData: { localHash: localBlock.hash, remoteHash: remoteBlock.hash },
                            operationType: 'reorgDetection'
                        },
                        'CRITICAL'
                    );

                    await this.handleReorg(chainId, BigInt(localBlock.number));
                    break;
                }
            } catch (e) {
                await this.errorLogger.logError(
                    e,
                    'RPC_ERROR',
                    { chainId, blockNumber: localBlock.number, operationType: 'verifyBlock' },
                    'ERROR'
                );
            }
        }
    }

    private async handleReorg(chainId: number, blockNumber: bigint) {
        console.log(`Executing rollback for chain ${chainId} starting from block ${blockNumber}`);

        try {
            await this.errorLogger.executeWithRetry(
                async () => {
                    await prisma.$transaction(async (tx) => {
                        // 1. Mark Blocks as not canonical
                        await tx.block.updateMany({
                            where: {
                                chainId,
                                number: { gte: blockNumber }
                            },
                            data: { isCanonical: false }
                        });

                        // 2. Mark IndexedEvents as not canonical
                        await tx.indexedEvent.updateMany({
                            where: {
                                chainId,
                                blockNumber: { gte: blockNumber }
                            },
                            data: { isCanonical: false }
                        });
                    });
                },
                'DATABASE_ERROR',
                { chainId, blockNumber, operationType: 'rollbackTransaction' },
                3
            );
            console.log(`✓ Rollback complete for chain ${chainId} >= ${blockNumber}`);
        } catch (error) {
            await this.errorLogger.logError(
                error,
                'DATABASE_ERROR',
                { chainId, blockNumber, operationType: 'handleReorg' },
                'CRITICAL'
            );
        }
    }

    public stop() {
        this.isRunning = false;
    }
}
