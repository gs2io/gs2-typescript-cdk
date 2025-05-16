import { VerifyAction } from "../../../core/model";
import { CounterScopeModelResetDayOfWeek } from "../enums/CounterScopeModelResetDayOfWeek";
export interface CounterScopeModelOptions {
    resetDayOfMonth?: number | null;
    resetDayOfWeek?: CounterScopeModelResetDayOfWeek | null;
    resetHour?: number | null;
    conditionName?: string | null;
    condition?: VerifyAction | null;
    anchorTimestamp?: number | null;
    days?: number | null;
}
