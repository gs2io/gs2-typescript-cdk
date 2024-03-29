import Scope from "../Scope";
export interface CategoryModelOptions {
    metadata?: string | null;
    minimumValue?: number | null;
    maximumValue?: number | null;
    uniqueByUserId?: boolean | null;
    sum?: boolean | null;
    calculateFixedTimingHour?: number | null;
    calculateFixedTimingMinute?: number | null;
    calculateIntervalMinutes?: number | null;
    additionalScopes?: Scope[] | null;
    entryPeriodEventId?: string | null;
    accessPeriodEventId?: string | null;
    ignoreUserIds?: string[] | null;
    generation?: string | null;
}
