import { Worker } from 'bullmq';
import { EventProcessor } from './processors/event-processor';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

async function main() {
    const processor = new EventProcessor();

    const url = new URL(REDIS_URL);

    console.log(`Starting Worker connecting to ${url.host}:${url.port}`);

    const worker = new Worker('RAW_EVENTS', async (job) => {
        await processor.process(job);
    }, {
        connection: {
            host: url.hostname,
            port: parseInt(url.port),
        },
        concurrency: 5 // Parallel processing
    });

    worker.on('completed', (job) => {
        // console.log(`Job ${job.id} completed`);
    });

    worker.on('failed', (job, err) => {
        console.error(`Job ${job?.id} failed: ${err.message}`);
    });

    console.log('Indexer Worker Started');
}

main().catch(console.error);
