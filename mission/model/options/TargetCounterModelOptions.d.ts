import { TargetCounterModelResetType } from "../enums/TargetCounterModelResetType";
export interface TargetCounterModelOptions {
    resetType?: TargetCounterModelResetType | null;
    conditionName?: string | null;
}
