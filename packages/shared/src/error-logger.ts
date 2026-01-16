import { prisma } from '@mci/database';

export type ErrorSeverity = 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

export type ErrorType =
    | 'RPC_ERROR'
    | 'WEBSOCKET_ERROR'
    | 'DATABASE_ERROR'
    | 'PROCESSING_ERROR'
    | 'VALIDATION_ERROR'
    | 'NETWORK_ERROR'
    | 'TIMEOUT_ERROR'
    | 'RATE_LIMIT_ERROR'
    | 'AUTHENTICATION_ERROR'
    | 'UNKNOWN_ERROR';

export interface ErrorLogContext {
    chainId?: number;
    blockNumber?: number | bigint;
    txHash?: string;
    rpcEndpoint?: string;
    operationType?: string;
    attemptNumber?: number;
    additionalData?: Record<string, any>;
}

export class ErrorLogger {
    private serviceName: string;
    private maxRetries: number;

    constructor(serviceName: string, maxRetries: number = 3) {
        this.serviceName = serviceName;
        this.maxRetries = maxRetries;
    }

    private serializeContext(context: ErrorLogContext | undefined): any {
        if (!context) return null;
        return JSON.parse(JSON.stringify(context, (_, value) =>
            typeof value === 'bigint' ? value.toString() : value
        ));
    }

    /**
     * Log an error to the database with full context
     */
    async logError(
        error: Error | unknown,
        errorType: ErrorType,
        context?: ErrorLogContext,
        severity: ErrorSeverity = 'ERROR'
    ): Promise<void> {
        try {
            const errorMessage = error instanceof Error ? error.message : String(error);
            const stackTrace = error instanceof Error ? error.stack : undefined;

            const serializedContext = this.serializeContext(context);

            await prisma.errorLog.create({
                data: {
                    chainId: context?.chainId,
                    errorType,
                    errorSource: this.serviceName,
                    errorMessage,
                    stackTrace,
                    context: serializedContext,
                    severity,
                    retryCount: context?.attemptNumber || 0,
                },
            });

            // Also log to console for immediate visibility
            const logMethod = severity === 'CRITICAL' ? console.error : console.warn;
            logMethod(
                `[${this.serviceName}] ${errorType} - ${severity}:`,
                errorMessage,
                serializedContext ? `Context: ${JSON.stringify(serializedContext)}` : ''
            );
        } catch (dbError) {
            // If database logging fails, at least log to console
            console.error('[ErrorLogger] Failed to log error to database:', dbError);
            console.error('[ErrorLogger] Original error:', error);
        }
    }

    /**
     * Execute a function with automatic retry and error logging
     */
    async executeWithRetry<T>(
        fn: () => Promise<T>,
        errorType: ErrorType,
        context?: ErrorLogContext,
        maxRetries: number = this.maxRetries
    ): Promise<T> {
        let lastError: Error | unknown;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                const severity: ErrorSeverity = attempt === maxRetries ? 'ERROR' : 'WARNING';

                await this.logError(error, errorType, { ...context, attemptNumber: attempt }, severity);

                if (attempt < maxRetries) {
                    // Exponential backoff
                    const delayMs = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
                    await new Promise((resolve) => setTimeout(resolve, delayMs));
                } else {
                    throw error;
                }
            }
        }

        throw lastError;
    }

    /**
     * Classify and log RPC errors with specific handling
     */
    async logRPCError(
        error: any,
        rpcEndpoint: string,
        operation: string,
        context?: ErrorLogContext
    ): Promise<ErrorType> {
        let errorType: ErrorType = 'RPC_ERROR';
        let severity: ErrorSeverity = 'ERROR';

        const errorMessage = error?.message || String(error);
        const errorCode = error?.code;

        // Classify the error based on common RPC error patterns
        if (errorMessage.includes('timeout') || errorMessage.includes('ETIMEDOUT')) {
            errorType = 'TIMEOUT_ERROR';
            severity = 'WARNING';
        } else if (errorMessage.includes('rate limit') || errorCode === 429) {
            errorType = 'RATE_LIMIT_ERROR';
            severity = 'WARNING';
        } else if (errorMessage.includes('network') || errorMessage.includes('ECONNREFUSED')) {
            errorType = 'NETWORK_ERROR';
            severity = 'ERROR';
        } else if (errorMessage.includes('unauthorized') || errorCode === 401) {
            errorType = 'AUTHENTICATION_ERROR';
            severity = 'CRITICAL';
        } else if (errorCode === 400 || errorMessage.includes('bad request')) {
            errorType = 'VALIDATION_ERROR';
            severity = 'WARNING';
        }

        await this.logError(error, errorType, {
            ...context,
            rpcEndpoint,
            operationType: operation,
        }, severity);

        return errorType;
    }

    /**
     * Log successful error resolution
     */
    async markErrorResolved(errorId: bigint): Promise<void> {
        try {
            await prisma.errorLog.update({
                where: { id: errorId },
                data: {
                    isResolved: true,
                    resolvedAt: new Date(),
                },
            });
        } catch (error) {
            console.error('[ErrorLogger] Failed to mark error as resolved:', error);
        }
    }

    /**
     * Get recent errors for monitoring
     */
    async getRecentErrors(limit: number = 100): Promise<any[]> {
        try {
            return await prisma.errorLog.findMany({
                take: limit,
                orderBy: { createdAt: 'desc' },
                where: { errorSource: this.serviceName },
            });
        } catch (error) {
            console.error('[ErrorLogger] Failed to fetch recent errors:', error);
            return [];
        }
    }

    /**
     * Get error statistics
     */
    async getErrorStats(hours: number = 24): Promise<{
        total: number;
        byType: Record<string, number>;
        bySeverity: Record<string, number>;
    }> {
        try {
            const since = new Date(Date.now() - hours * 60 * 60 * 1000);
            const errors = await prisma.errorLog.findMany({
                where: {
                    errorSource: this.serviceName,
                    createdAt: { gte: since },
                },
            });

            const byType: Record<string, number> = {};
            const bySeverity: Record<string, number> = {};

            errors.forEach((error) => {
                byType[error.errorType] = (byType[error.errorType] || 0) + 1;
                bySeverity[error.severity] = (bySeverity[error.severity] || 0) + 1;
            });

            return {
                total: errors.length,
                byType,
                bySeverity,
            };
        } catch (error) {
            console.error('[ErrorLogger] Failed to fetch error stats:', error);
            return { total: 0, byType: {}, bySeverity: {} };
        }
    }
}

/**
 * Create a singleton error logger for each service
 */
export const createErrorLogger = (serviceName: string, maxRetries: number = 3): ErrorLogger => {
    return new ErrorLogger(serviceName, maxRetries);
};
