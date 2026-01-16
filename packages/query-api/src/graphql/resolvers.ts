import { prisma, Prisma } from '@mci/database';

const TYPE_FILTERS: Record<string, Prisma.IndexedEventWhereInput> = {
    'Token Transfer': { eventType: { equals: 'Transfer' } },
    'Contract Event': { eventType: { notIn: ['Transfer', 'Transaction'] } },
    Transaction: { eventType: { equals: 'Transaction' } }
};

const normalizeEvent = (event: any) => ({
    ...event,
    id: event.id.toString(),
    blockNumber: event.blockNumber.toString(),
    timestamp: event.timestamp.toISOString(),
    status: event.isCanonical === false ? 'Failed' : 'Success',
    gasUsed: event.gasUsed,
    gasPrice: event.gasPrice,
    effectiveGasPrice: event.effectiveGasPrice,
    gasLimit: event.gasLimit,
    maxFeePerGas: event.maxFeePerGas,
    maxPriorityFeePerGas: event.maxPriorityFeePerGas,
    input: event.input,
    nonce: event.nonce,
    transactionIndex: event.transactionIndex,
    txType: event.txType
});

const normalizeBlock = (block: any) => ({
    ...block,
    id: block.id.toString(),
    number: block.number.toString(),
    timestamp: block.timestamp.toISOString()
});

const buildWhere = (args: { chainId?: number; type?: string; status?: string; search?: string }) => {
    const { chainId, type, status, search } = args;
    const where: Prisma.IndexedEventWhereInput = {};
    const andFilters: Prisma.IndexedEventWhereInput[] = [];

    if (typeof chainId === 'number') {
        andFilters.push({ chainId });
    }

    if (type && TYPE_FILTERS[type]) {
        andFilters.push(TYPE_FILTERS[type]);
    }

    if (status) {
        const normalized = status.toLowerCase();
        if (normalized === 'success') {
            andFilters.push({ isCanonical: true });
        } else if (normalized === 'failed') {
            andFilters.push({ isCanonical: false });
        }
    }

    if (search) {
        const value = search.trim();
        if (value.length > 0) {
            const isHex = value.startsWith('0x');
            const isTxHash = isHex && value.length === 66;
            const isAddress = isHex && value.length === 42;
            const isBlockNumber = /^\d+$/.test(value);
            const orFilters: Prisma.IndexedEventWhereInput[] = [];

            if (isTxHash) {
                orFilters.push({ txHash: { equals: value } });
            } else {
                orFilters.push({ txHash: { contains: value } });
            }

            if (isAddress) {
                orFilters.push(
                    { from: { equals: value } },
                    { to: { equals: value } },
                    { contractAddress: { equals: value } }
                );
            } else if (isHex) {
                orFilters.push(
                    { from: { contains: value } },
                    { to: { contains: value } },
                    { contractAddress: { contains: value } }
                );
            } else {
                orFilters.push(
                    { contractAddress: { contains: value } },
                    { from: { contains: value } },
                    { to: { contains: value } },
                    { tokenId: { contains: value } }
                );
            }

            if (isBlockNumber) {
                orFilters.push({ blockNumber: BigInt(value) });
            }

            andFilters.push({ OR: orFilters });
        }
    }

    if (andFilters.length > 0) {
        where.AND = andFilters;
    }

    return where;
};

export const resolvers: any = {
    Query: {
        events: async (_: any, args: { limit?: number; offset?: number; chainId?: number; type?: string; status?: string; search?: string }) => {
            const { limit = 20, offset = 0 } = args;
            const where = buildWhere(args);

            const events = await prisma.indexedEvent.findMany({
                take: limit,
                skip: offset,
                where,
                orderBy: {
                    timestamp: 'desc'
                }
            });

            return events.map(normalizeEvent);
        },
        eventsPage: async (_: any, args: { limit?: number; offset?: number; chainId?: number; type?: string; status?: string; search?: string }) => {
            const { limit = 25, offset = 0 } = args;
            const where = buildWhere(args);

            const [nodes, totalCount] = await Promise.all([
                prisma.indexedEvent.findMany({
                    take: limit,
                    skip: offset,
                    where,
                    orderBy: {
                        timestamp: 'desc'
                    }
                }),
                prisma.indexedEvent.count({ where })
            ]);

            return {
                nodes: nodes.map(normalizeEvent),
                totalCount
            };
        },
        blocksPage: async (_: any, args: { limit?: number; offset?: number; chainId?: number }) => {
            const { limit = 25, offset = 0, chainId } = args;
            const where: Prisma.BlockWhereInput = {};
            if (typeof chainId === 'number') {
                where.chainId = chainId;
            }

            const [nodes, totalCount] = await Promise.all([
                prisma.block.findMany({
                    take: limit,
                    skip: offset,
                    where,
                    orderBy: {
                        number: 'desc'
                    }
                }),
                prisma.block.count({ where })
            ]);

            return {
                nodes: nodes.map(normalizeBlock),
                totalCount
            };
        },
        block: async (_: any, args: { chainId: number; number: string }) => {
            const block = await prisma.block.findUnique({
                where: {
                    chainId_number: {
                        chainId: args.chainId,
                        number: BigInt(args.number)
                    }
                }
            });

            if (!block) return null;
            return normalizeBlock(block);
        },
        event: async (_: any, args: { id: string }) => {
            const event = await prisma.indexedEvent.findUnique({
                where: { id: BigInt(args.id) }
            });

            if (!event) return null;
            return normalizeEvent(event);
        },
        transactionHistory: async (_: any, args: { days?: number, chainId?: number }) => {
            const days = args.days || 14;
            const chainId = args.chainId;
            const history = [];
            const now = new Date();

            // Loop for last N days (0 to days-1)
            for (let i = days - 1; i >= 0; i--) {
                const date = new Date(now);
                date.setDate(date.getDate() - i);
                date.setHours(0, 0, 0, 0);

                const nextDate = new Date(date);
                nextDate.setDate(date.getDate() + 1);

                const where: any = {
                    eventType: 'Transaction',
                    timestamp: {
                        gte: date,
                        lt: nextDate
                    }
                };

                if (typeof chainId === 'number') {
                    where.chainId = chainId;
                }

                const count = await prisma.indexedEvent.count({ where });

                history.push({
                    date: date.toISOString().split('T')[0], // YYYY-MM-DD
                    count
                });
            }

            return history;
        },
        chains: async () => {
            return await prisma.chain.findMany();
        },
        networkStats: async (_: any, args: { chainId: number }) => {
            const { chainId } = args;

            const [transactionCount, totalEvents, latestBlock] = await Promise.all([
                prisma.indexedEvent.count({
                    where: { chainId, eventType: 'Transaction' }
                }),
                prisma.indexedEvent.count({
                    where: { chainId }
                }),
                prisma.block.findFirst({
                    where: { chainId },
                    orderBy: { number: 'desc' },
                    select: { number: true }
                })
            ]);

            // Estimate median gas price from last 100 events
            const recentGasPrices = await prisma.indexedEvent.findMany({
                where: { chainId, gasPrice: { not: null } },
                take: 100,
                orderBy: { timestamp: 'desc' },
                select: { gasPrice: true }
            });

            let medianGasPrice = '0';
            if (recentGasPrices.length > 0) {
                const prices = recentGasPrices.map(e => BigInt(e.gasPrice!)).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
                medianGasPrice = prices[Math.floor(prices.length / 2)].toString();
            }

            // Estimate TPS (Transactions Per Second) or just provide a placeholder/rough calc
            // For now, let's just use 492 / (14 days in seconds) as a very rough base or just 1.5 as placeholder
            // Let's try to get count in last 1 hour
            const oneHourAgo = new Date(Date.now() - 3600000);
            const recentTxCount = await prisma.indexedEvent.count({
                where: { chainId, eventType: 'Transaction', timestamp: { gte: oneHourAgo } }
            });
            const tps = parseFloat((recentTxCount / 3600).toFixed(2));

            return {
                chainId,
                transactionCount,
                totalEvents,
                latestBlock: latestBlock?.number.toString() || '0',
                medianGasPrice,
                tps: tps > 0 ? tps : 0.01
            };
        },
        errorLogs: async (_: any, args: { limit?: number; offset?: number; severity?: string; errorType?: string; isResolved?: boolean }) => {
            const { limit = 50, offset = 0, severity, errorType, isResolved } = args;
            const where: Prisma.ErrorLogWhereInput = {};

            if (severity) {
                where.severity = severity;
            }
            if (errorType) {
                where.errorType = errorType;
            }
            if (typeof isResolved === 'boolean') {
                where.isResolved = isResolved;
            }

            const logs = await prisma.errorLog.findMany({
                take: limit,
                skip: offset,
                where,
                orderBy: { createdAt: 'desc' }
            });

            return logs.map((log: any) => ({
                ...log,
                id: log.id.toString(),
                context: log.context ? JSON.stringify(log.context) : null,
                createdAt: log.createdAt.toISOString(),
                resolvedAt: log.resolvedAt ? log.resolvedAt.toISOString() : null
            }));
        },
        errorStats: async (_: any, args: { hours?: number }) => {
            const hours = args.hours || 24;
            const since = new Date(Date.now() - hours * 60 * 60 * 1000);

            const errors = await prisma.errorLog.findMany({
                where: { createdAt: { gte: since } }
            });

            const byType: Record<string, number> = {};
            const bySeverity: Record<string, number> = {};
            let criticalCount = 0;

            errors.forEach((error: any) => {
                byType[error.errorType] = (byType[error.errorType] || 0) + 1;
                bySeverity[error.severity] = (bySeverity[error.severity] || 0) + 1;
                if (error.severity === 'CRITICAL') {
                    criticalCount++;
                }
            });

            const recentErrors = await prisma.errorLog.findMany({
                take: 10,
                where: { createdAt: { gte: since } },
                orderBy: { createdAt: 'desc' }
            });

            return {
                total: errors.length,
                byType: JSON.stringify(byType),
                bySeverity: JSON.stringify(bySeverity),
                criticalCount,
                recentErrors: recentErrors.map((log: any) => ({
                    ...log,
                    id: log.id.toString(),
                    context: log.context ? JSON.stringify(log.context) : null,
                    createdAt: log.createdAt.toISOString(),
                    resolvedAt: log.resolvedAt ? log.resolvedAt.toISOString() : null
                }))
            };
        }
    }
};
