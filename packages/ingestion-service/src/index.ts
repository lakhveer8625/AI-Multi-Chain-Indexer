import { IngestionService } from './ingestor';
import dotenv from 'dotenv';
import path from 'path';

// Load env from root
dotenv.config({ path: path.join(__dirname, '../../../.env') });

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

async function main() {
    const service = new IngestionService(REDIS_URL);

    await service.init();
    await service.start();

    // Keep process alive
    process.on('SIGINT', async () => {
        console.log('Shutting down...');
        process.exit(0);
    });
}

main().catch(console.error);
