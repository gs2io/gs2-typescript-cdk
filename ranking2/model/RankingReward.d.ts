import { RankingRewardOptions } from "./options/RankingRewardOptions";
export default class RankingReward {
    private readonly thresholdRank;
    private readonly metadata;
    private readonly acquireActions;
    constructor(thresholdRank: number, options?: RankingRewardOptions | null);
    properties(): {
        [name: string]: any;
    };
}
