export interface CategoryModelOptions {
    metadata?: string | null;
    minimumValue?: number | null;
    maximumValue?: number | null;
    sum?: boolean | null;
    calculateFixedTimingHour?: number | null;
    calculateFixedTimingMinute?: number | null;
    calculateIntervalMinutes?: number | null;
    entryPeriodEventId?: string | null;
    accessPeriodEventId?: string | null;
    ignoreUserIds?: string[] | null;
    generation?: string | null;
}
