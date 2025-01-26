import { VerifyAction } from "../../../core/model";
import { CounterScopeModelResetType } from "../enum/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "../enum/CounterScopeModelResetDayOfWeek";
export interface CounterScopeModelOptions {
    resetType?: CounterScopeModelResetType | null;
    resetDayOfMonth?: number | null;
    resetDayOfWeek?: CounterScopeModelResetDayOfWeek | null;
    resetHour?: number | null;
    conditionName?: string | null;
    condition?: VerifyAction | null;
    anchorTimestamp?: number | null;
    days?: number | null;
}
