import GlobalRankingModelRef from "./GlobalRankingModelRef";
import SubscribeRankingModelRef from "./SubscribeRankingModelRef";
import ClusterRankingModelRef from "./ClusterRankingModelRef";
import CreateGlobalRankingReceivedRewardByUserId from "../stampSheet/CreateGlobalRankingReceivedRewardByUserId";
import CreateClusterRankingReceivedRewardByUserId from "../stampSheet/CreateClusterRankingReceivedRewardByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    globalRankingModel(rankingName: string): GlobalRankingModelRef;
    subscribeRankingModel(rankingName: string): SubscribeRankingModelRef;
    clusterRankingModel(rankingName: string): ClusterRankingModelRef;
    createGlobalRankingReceivedReward(rankingName: string, season?: number | null, userId?: string): CreateGlobalRankingReceivedRewardByUserId;
    createClusterRankingReceivedReward(rankingName: string, clusterName: string, season?: number | null, userId?: string): CreateClusterRankingReceivedRewardByUserId;
    grn(): string;
}
