import { SubscribeTransactionOptions } from "./options/SubscribeTransactionOptions";
import { SubscribeTransactionStore } from "./enums/SubscribeTransactionStore";
import { SubscribeTransactionStatusDetail } from "./enums/SubscribeTransactionStatusDetail";
export default class SubscribeTransaction {
    private readonly contentName;
    private readonly transactionId;
    private readonly store;
    private readonly statusDetail;
    private readonly expiresAt;
    private readonly userId;
    private readonly lastAllocatedAt;
    private readonly lastTakeOverAt;
    private readonly revision;
    constructor(contentName: string, transactionId: string, store: SubscribeTransactionStore, statusDetail: SubscribeTransactionStatusDetail, expiresAt: number, options?: SubscribeTransactionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
