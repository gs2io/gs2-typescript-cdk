export interface SubscribeTransactionOptions {
    userId?: string | null;
    lastAllocatedAt?: number | null;
    lastTakeOverAt?: number | null;
    revision?: number | null;
}
