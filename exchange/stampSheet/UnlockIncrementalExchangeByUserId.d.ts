import { AcquireAction } from "../../core/model";
export default class UnlockIncrementalExchangeByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly rateName;
    private readonly userId;
    private readonly lockTransactionId;
    constructor(namespaceName: string, rateName: string, lockTransactionId: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
