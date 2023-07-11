import { AcquireAction } from "../../core/model";
export default class UnlockIncrementalExchangeByUserId extends AcquireAction {
    constructor(namespaceName: string, rateName: string, lockTransactionId: string, userId?: string | null);
}
