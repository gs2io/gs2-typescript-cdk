import { AcquireAction } from "../../../core/model";
export interface IncrementalRateModelOptions {
    metadata?: string | null;
    baseValue?: number | null;
    coefficientValue?: number | null;
    calculateScriptId?: string | null;
    acquireActions?: AcquireAction[] | null;
}
