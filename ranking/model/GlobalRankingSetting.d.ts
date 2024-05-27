import { GlobalRankingSettingOptions } from "./options/GlobalRankingSettingOptions";
export default class GlobalRankingSetting {
    private readonly uniqueByUserId;
    private readonly calculateIntervalMinutes;
    private readonly calculateFixedTiming;
    private readonly additionalScopes;
    private readonly ignoreUserIds;
    private readonly generation;
    constructor(uniqueByUserId: boolean, calculateIntervalMinutes: number, options?: GlobalRankingSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
