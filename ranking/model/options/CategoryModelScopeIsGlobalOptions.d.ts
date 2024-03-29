import Scope from "../Scope";
export interface CategoryModelScopeIsGlobalOptions {
    metadata?: string | null;
    minimumValue?: number | null;
    maximumValue?: number | null;
    calculateFixedTimingHour?: number | null;
    calculateFixedTimingMinute?: number | null;
    additionalScopes?: Scope[] | null;
    entryPeriodEventId?: string | null;
    accessPeriodEventId?: string | null;
    ignoreUserIds?: string[] | null;
    generation?: string | null;
}
