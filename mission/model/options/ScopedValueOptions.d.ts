import { ScopedValueResetType } from "../enum/ScopedValueResetType";
export interface ScopedValueOptions {
    resetType?: ScopedValueResetType | null;
    conditionName?: string | null;
    nextResetAt?: number | null;
}
