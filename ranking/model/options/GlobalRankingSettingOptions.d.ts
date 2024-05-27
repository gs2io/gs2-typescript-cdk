import FixedTiming from "../FixedTiming";
import Scope from "../Scope";
export interface GlobalRankingSettingOptions {
    calculateFixedTiming?: FixedTiming | null;
    additionalScopes?: Scope[] | null;
    ignoreUserIds?: string[] | null;
    generation?: string | null;
}
