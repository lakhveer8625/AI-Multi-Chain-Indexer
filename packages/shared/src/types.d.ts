export interface Chain {
    id: number;
    name: string;
    rpcUrl: string;
    chainId: number;
}
export interface Block {
    number: number;
    hash: string;
    parentHash: string;
    timestamp: number;
}
