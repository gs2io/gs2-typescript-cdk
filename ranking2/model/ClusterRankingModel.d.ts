import { ClusterRankingModelOptions } from "./options/ClusterRankingModelOptions";
import { ClusterRankingModelClusterType } from "./enum/ClusterRankingModelClusterType";
import { ClusterRankingModelOrderDirection } from "./enum/ClusterRankingModelOrderDirection";
export default class ClusterRankingModel {
    private readonly name;
    private readonly clusterType;
    private readonly sum;
    private readonly orderDirection;
    private readonly metadata;
    private readonly minimumValue;
    private readonly maximumValue;
    private readonly entryPeriodEventId;
    private readonly rankingRewards;
    private readonly accessPeriodEventId;
    constructor(name: string, clusterType: ClusterRankingModelClusterType, sum: boolean, orderDirection: ClusterRankingModelOrderDirection, options?: ClusterRankingModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
