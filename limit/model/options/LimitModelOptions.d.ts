import { LimitModelResetDayOfWeek } from "../enum/LimitModelResetDayOfWeek";
export interface LimitModelOptions {
    metadata?: string | null;
    resetDayOfMonth?: number | null;
    resetDayOfWeek?: LimitModelResetDayOfWeek | null;
    resetHour?: number | null;
    anchorTimestamp?: number | null;
    days?: number | null;
}
