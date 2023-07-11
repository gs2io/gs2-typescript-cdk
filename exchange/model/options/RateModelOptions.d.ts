import { ConsumeAction } from "../../../core/model";
import { AcquireAction } from "../../../core/model";
export interface RateModelOptions {
    metadata?: string | null;
    consumeActions?: ConsumeAction[] | null;
    lockTime?: number | null;
    enableSkip?: boolean | null;
    skipConsumeActions?: ConsumeAction[] | null;
    acquireActions?: AcquireAction[] | null;
}
