import { PrismaClient } from '@mci/database';
import { EVMAdapter } from '@mci/chain-adapters';
import { sleep } from '@mci/shared';

const prisma = new PrismaClient();
const DEPTH_TO_CHECK = 12; // Check last 12 blocks for reorgs

export class ReorgDetector {
    private adapters: Map<number, EVMAdapter> = new Map();
    private isRunning = false;

    constructor() { }

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
                const chains = await prisma.chain.findMany({ where: { type: 'EVM' } });

                for (const chain of chains) {
                    await this.checkChain(chain.chainId, chain.rpcUrl);
                }

            } catch (error) {
                console.error('Error in reorg loop:', error);
            }

            await sleep(10000); // Check every 10 seconds
        }
    }

    private async checkChain(chainId: number, rpcUrl: string) {
        const adapter = await this.getAdapter(chainId, rpcUrl);

        // Get last N blocks from DB
        const recentBlocks = await prisma.block.findMany({
            where: { chainId, isCanonical: true },
            orderBy: { number: 'desc' },
            take: DEPTH_TO_CHECK
        });

        if (recentBlocks.length === 0) return;

        for (const localBlock of recentBlocks) {
            try {
                const remoteBlock = await adapter.getBlock(Number(localBlock.number));

                if (!remoteBlock) {
                    console.warn(`Block ${localBlock.number} not found on chain ${chainId}`);
                    continue;
                }

                if (remoteBlock.hash !== localBlock.hash) {
                    console.warn(`REORG DETECTED on Chain ${chainId} Block ${localBlock.number}!`);
                    console.warn(`Local: ${localBlock.hash}, Remote: ${remoteBlock.hash}`);
                    await this.handleReorg(chainId, BigInt(localBlock.number));
                    // If we found a reorg, we can stop checking deeper for now as the reorg handler should clean up
                    break;
                }
            } catch (e) {
                console.error(`Failed to verify block ${localBlock.number} on chain ${chainId}:`, e);
            }
        }
    }

    private async handleReorg(chainId: number, blockNumber: bigint) {
        // Mark this block and all subsequent blocks as non-canonical
        // We assume if block N is reorged, N+1 etc are also invalid/orphan

        console.log(`Executing rollback for chain ${chainId} starting from block ${blockNumber}`);

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

        console.log(`Rollback complete for chain ${chainId} >= ${blockNumber}`);
    }

    public stop() {
        this.isRunning = false;
    }
}
