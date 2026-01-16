import { Queue } from 'bullmq';
import { DecodedEvent } from '@mci/chain-adapters';

export class EventPublisher {
    private queue: Queue;

    constructor(redisUrl: string) {
        // Parse redis url or pass config options
        const url = new URL(redisUrl);
        this.queue = new Queue('RAW_EVENTS', {
            connection: {
                host: url.hostname,
                port: parseInt(url.port),
                // password: url.password, 
            }
        });
    }

    async publish(event: DecodedEvent) {
        // Generate a unique deduplication key
        const jobId = `${event.chain_id}:${event.tx_hash}:${event.log_index}`;

        await this.queue.add('event', event, {
            jobId, // Native deduplication by BullMQ/Redis
            removeOnComplete: true,
            attempts: 3,
            backoff: {
                type: 'exponential',
                delay: 1000
            }
        });

        console.log(`Published event ${jobId}`);
    }

    async close() {
        await this.queue.close();
    }
}
