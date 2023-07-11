import { CounterScopeModelResetDayOfWeek } from "../enum/CounterScopeModelResetDayOfWeek";
export interface CounterScopeModelOptions {
    resetDayOfMonth?: number | null;
    resetDayOfWeek?: CounterScopeModelResetDayOfWeek | null;
    resetHour?: number | null;
}
