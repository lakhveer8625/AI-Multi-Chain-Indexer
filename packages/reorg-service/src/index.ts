import 'dotenv/config';
import { ReorgDetector } from './reorg-detector';

const detector = new ReorgDetector();

// Handle shutdown
process.on('SIGINT', () => {
    console.log('Stopping Reorg Detector...');
    detector.stop();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Stopping Reorg Detector...');
    detector.stop();
    process.exit(0);
});

// Start service
detector.start().catch((err) => {
    console.error('Fatal error in Reorg Service:', err);
    process.exit(1);
});
