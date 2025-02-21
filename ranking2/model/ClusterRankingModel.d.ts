import { ClusterRankingModelOptions } from "./options/ClusterRankingModelOptions";
import { ClusterRankingModelClusterType } from "./enums/ClusterRankingModelClusterType";
import { ClusterRankingModelOrderDirection } from "./enums/ClusterRankingModelOrderDirection";
import { ClusterRankingModelRewardCalculationIndex } from "./enums/ClusterRankingModelRewardCalculationIndex";
export default class ClusterRankingModel {
    private readonly name;
    private readonly clusterType;
    private readonly sum;
    private readonly orderDirection;
    private readonly rewardCalculationIndex;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly entryPeriodEventId;
    private readonly rankingRewards;
    private readonly accessPeriodEventId;
    constructor(name: string, clusterType: ClusterRankingModelClusterType, sum: boolean, orderDirection: ClusterRankingModelOrderDirection, rewardCalculationIndex: ClusterRankingModelRewardCalculationIndex, options?: ClusterRankingModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
