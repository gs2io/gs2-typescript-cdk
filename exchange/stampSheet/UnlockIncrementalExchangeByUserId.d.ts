import { AcquireAction } from "../../core/model";
export default class UnlockIncrementalExchangeByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly rateName;
    private readonly userId;
    private readonly lockTransactionId;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rateName: string, lockTransactionId: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
