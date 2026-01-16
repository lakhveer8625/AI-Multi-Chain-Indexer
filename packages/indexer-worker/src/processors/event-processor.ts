import { DecodedEvent } from '@mci/chain-adapters';
import { prisma, Prisma } from '@mci/database';
import { Job } from 'bullmq';

export class EventProcessor {
    async process(job: Job<DecodedEvent>) {
        const event = job.data;

        // 1. Check if chain exists (or cache it)
        // Assuming seeds or init script created chain 1 & 11155111
        // Safeupsert chain if needed? (Skipping for speed, assuming exists)

        // 2. Ensure Block exists
        await this.ensureBlock(event);

        // 3. Normalize Event
        const indexedData = this.normalize(event);

        if (event.gas_used || event.gas_price) {
            console.log(`[EventProcessor] Gas info for ${event.tx_hash}: used=${event.gas_used}, price=${event.gas_price}`);
        }

        // 4. Persist to DB
        // Using transaction to ensure consistency if complex
        try {
            await prisma.indexedEvent.create({
                data: {
                    chain: { connect: { chainId: event.chain_id } },
                    blockNumber: BigInt(event.block_number),
                    txHash: event.tx_hash,
                    logIndex: event.log_index,
                    eventType: indexedData.eventType,
                    contractAddress: event.address,
                    from: indexedData.from,
                    to: indexedData.to,
                    amount: indexedData.amount,
                    tokenId: indexedData.tokenId,
                    metadata: event.payload as any,
                    timestamp: new Date(),
                    version: 1,
                    isCanonical: true,
                    gasUsed: indexedData.gasUsed,
                    gasPrice: indexedData.gasPrice,
                    effectiveGasPrice: indexedData.effectiveGasPrice,
                    gasLimit: indexedData.gasLimit,
                    maxFeePerGas: indexedData.maxFeePerGas,
                    maxPriorityFeePerGas: indexedData.maxPriorityFeePerGas,
                    input: indexedData.input,
                    nonce: indexedData.nonce,
                    transactionIndex: indexedData.transactionIndex,
                    txType: indexedData.txType
                } as any
            });
            // console.log(`Indexed event ${event.tx_hash}-${event.log_index}`);
        } catch (e: any) {
            if (e.code === 'P2002') {
                // Unique constraint violation - Idempotent success
                // console.log('Duplicate event ignored');
                return;
            }
            throw e;
        }
    }

    private async ensureBlock(event: DecodedEvent) {
        // Ideally block is ingested before events, or we fetch it here.
        // For now, we create a placeholder if missing
        try {
            await prisma.block.upsert({
                where: {
                    chainId_number: {
                        chainId: event.chain_id,
                        number: BigInt(event.block_number)
                    }
                },
                create: {
                    chainId: event.chain_id,
                    number: BigInt(event.block_number),
                    hash: '0x' + '0'.repeat(64), // Placeholder
                    parentHash: '0x' + '0'.repeat(64),
                    timestamp: new Date()
                },
                update: {}
            });
        } catch (e) {
            // Ignore race conditions
        }
    }

    private normalize(event: DecodedEvent) {
        const TRANSFER_SIG = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

        let eventType = event.event_signature === 'Transaction' ? 'Transaction' : 'UNKNOWN';
        let from: string | undefined = event.tx_from;
        let to: string | undefined = event.tx_to;
        let amount: string | undefined = event.tx_value && event.tx_value !== '0' ? event.tx_value : undefined;
        let tokenId: string | undefined;

        // Logic for EVM
        if (event.payload && event.payload.topics && event.payload.topics.length > 0) {
            const topics = event.payload.topics;
            if (topics[0] === TRANSFER_SIG) {
                eventType = 'Transfer';
                if (topics.length >= 3) {
                    from = this.decodeAddress(topics[1]);
                    to = this.decodeAddress(topics[2]);

                    if (topics.length === 4) {
                        // ERC721
                        tokenId = BigInt(topics[3]).toString();
                        amount = '1';
                    } else if (event.payload.data && event.payload.data !== '0x') {
                        // ERC20
                        try {
                            amount = BigInt(event.payload.data).toString();
                        } catch (e) {
                            amount = event.payload.data;
                        }
                    }
                }
            }
        } else if (event.event_signature === 'solana-program-log') {
            eventType = 'SolanaLog';
        }

        return {
            eventType,
            from,
            to,
            amount,
            tokenId,
            gasUsed: event.gas_used,
            gasPrice: event.gas_price,
            effectiveGasPrice: event.effective_gas_price,
            gasLimit: event.gas_limit,
            maxFeePerGas: event.max_fee_per_gas,
            maxPriorityFeePerGas: event.max_priority_fee_per_gas,
            input: event.input,
            nonce: event.nonce,
            transactionIndex: event.transaction_index,
            txType: event.tx_type
        };
    }

    private decodeAddress(topic: string): string {
        // padStart 0, remove 0x, take last 40 chars -> address
        // topic is 32 bytes (66 chars with 0x)
        if (topic.length === 66) {
            return '0x' + topic.slice(26);
        }
        return topic;
    }
}
