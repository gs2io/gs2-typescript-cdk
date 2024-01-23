import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface TransactionOptions {
    transactionId?: string | null;
    consumeActions?: ConsumeAction[] | null;
    acquireActions?: AcquireAction[] | null;
}
