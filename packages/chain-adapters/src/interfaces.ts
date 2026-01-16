import { Block } from '@mci/shared';

export interface DecodedEvent {
    chain_id: number;
    block_number: number;
    tx_hash: string;
    log_index: number;
    event_signature: string;
    payload: any;
    address: string;
    tx_from?: string;
    tx_to?: string;
    tx_value?: string;
    gas_used?: string;
    gas_price?: string;
    effective_gas_price?: string;
    gas_limit?: string;
    max_fee_per_gas?: string;
    max_priority_fee_per_gas?: string;
    input?: string;
    nonce?: number;
    transaction_index?: number;
    tx_type?: number;
}

export interface ChainAdapter {
    chainId: number;
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    getCurrentBlock(): Promise<number>;
    getBlock(blockNumber: number, includeTransactions?: boolean): Promise<Block>;

    // Historical fetching
    getLogs(fromBlock: number, toBlock: number, addresses?: string[]): Promise<DecodedEvent[]>;

    // Real-time subscriptions
    subscribeToBlocks(callback: (blockNumber: number) => void): void;
    subscribeToLogs(callback: (event: DecodedEvent) => void, addresses?: string[]): void;
}
