import { GlobalRankingModelOptions } from "./options/GlobalRankingModelOptions";
import { GlobalRankingModelOrderDirection } from "./enum/GlobalRankingModelOrderDirection";
export default class GlobalRankingModel {
    private readonly name;
    private readonly sum;
    private readonly orderDirection;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly entryPeriodEventId;
    private readonly rankingRewards;
    private readonly accessPeriodEventId;
    constructor(name: string, sum: boolean, orderDirection: GlobalRankingModelOrderDirection, options?: GlobalRankingModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
