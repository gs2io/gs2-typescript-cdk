import { VerifyAction } from "../../../core/model";
import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface RateModelTimingTypeIsAwaitOptions {
    metadata?: string | null;
    verifyActions?: VerifyAction[] | null;
    consumeActions?: ConsumeAction[] | null;
    acquireActions?: AcquireAction[] | null;
}
