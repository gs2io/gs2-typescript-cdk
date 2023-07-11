export interface CategoryModelScopeIsGlobalOptions {
    metadata?: string | null;
    minimumValue?: number | null;
    maximumValue?: number | null;
    calculateFixedTimingHour?: number | null;
    calculateFixedTimingMinute?: number | null;
    entryPeriodEventId?: string | null;
    accessPeriodEventId?: string | null;
    ignoreUserIds?: string[] | null;
    generation?: string | null;
}
