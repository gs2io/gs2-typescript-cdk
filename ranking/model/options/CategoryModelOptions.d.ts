import Scope from "../Scope";
import GlobalRankingSetting from "../GlobalRankingSetting";
export interface CategoryModelOptions {
    metadata?: string | null;
    minimumValue?: number | null;
    maximumValue?: number | null;
    globalRankingSetting?: GlobalRankingSetting | null;
    entryPeriodEventId?: string | null;
    accessPeriodEventId?: string | null;
    uniqueByUserId?: boolean | null;
    calculateFixedTimingHour?: number | null;
    calculateFixedTimingMinute?: number | null;
    calculateIntervalMinutes?: number | null;
    additionalScopes?: Scope[] | null;
    ignoreUserIds?: string[] | null;
    generation?: string | null;
}
