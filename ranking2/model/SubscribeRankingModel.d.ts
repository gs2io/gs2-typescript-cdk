import { SubscribeRankingModelOptions } from "./options/SubscribeRankingModelOptions";
import { SubscribeRankingModelOrderDirection } from "./enum/SubscribeRankingModelOrderDirection";
export default class SubscribeRankingModel {
    private readonly name;
    private readonly sum;
    private readonly orderDirection;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly entryPeriodEventId;
    private readonly accessPeriodEventId;
    constructor(name: string, sum: boolean, orderDirection: SubscribeRankingModelOrderDirection, options?: SubscribeRankingModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
