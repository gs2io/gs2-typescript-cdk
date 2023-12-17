import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface TransactionOptions {
    consumeActions?: ConsumeAction[] | null;
    acquireActions?: AcquireAction[] | null;
}
