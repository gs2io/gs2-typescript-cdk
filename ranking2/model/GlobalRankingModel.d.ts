import { GlobalRankingModelOptions } from "./options/GlobalRankingModelOptions";
import { GlobalRankingModelOrderDirection } from "./enums/GlobalRankingModelOrderDirection";
import { GlobalRankingModelRewardCalculationIndex } from "./enums/GlobalRankingModelRewardCalculationIndex";
export default class GlobalRankingModel {
    private readonly name;
    private readonly sum;
    private readonly orderDirection;
    private readonly rewardCalculationIndex;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly entryPeriodEventId;
    private readonly rankingRewards;
    private readonly accessPeriodEventId;
    constructor(name: string, sum: boolean, orderDirection: GlobalRankingModelOrderDirection, rewardCalculationIndex: GlobalRankingModelRewardCalculationIndex, options?: GlobalRankingModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
