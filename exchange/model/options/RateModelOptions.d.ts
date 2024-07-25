import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface RateModelOptions {
    metadata?: string | null;
    verifyActions?: VerifyAction[] | null;
    consumeActions?: ConsumeAction[] | null;
    lockTime?: number | null;
    acquireActions?: AcquireAction[] | null;
}
