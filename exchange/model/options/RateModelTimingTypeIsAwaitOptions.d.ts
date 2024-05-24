import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface RateModelTimingTypeIsAwaitOptions {
    metadata?: string | null;
    consumeActions?: ConsumeAction[] | null;
    acquireActions?: AcquireAction[] | null;
}
