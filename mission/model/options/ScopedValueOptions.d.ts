import { ScopedValueResetType } from "../enums/ScopedValueResetType";
export interface ScopedValueOptions {
    resetType?: ScopedValueResetType | null;
    conditionName?: string | null;
    nextResetAt?: number | null;
}
