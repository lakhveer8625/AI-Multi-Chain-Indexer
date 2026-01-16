import { Request, Response, NextFunction } from 'express';
import { prisma } from '@mci/database';

export interface AuthUser {
    id: string;
    role: string;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'] as string;

    if (!apiKey) {
        return next();
    }

    try {
        const keyRecord = await prisma.apiKey.findUnique({
            where: { key: apiKey },
            include: { user: true }
        });

        if (keyRecord && keyRecord.isActive) {
            (req as any).user = {
                id: keyRecord.user.id,
                role: keyRecord.user.role
            };

            // Update last used asynchronously
            prisma.apiKey.update({
                where: { id: keyRecord.id },
                data: { lastUsedAt: new Date() }
            }).catch(console.error);
        }
    } catch (error) {
        console.error('Auth middleware error:', error);
    }

    next();
};
