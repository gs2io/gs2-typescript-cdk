import GlobalRankingModelRef from "./GlobalRankingModelRef";
import SubscribeRankingModelRef from "./SubscribeRankingModelRef";
import ClusterRankingModelRef from "./ClusterRankingModelRef";
import CreateGlobalRankingReceivedRewardByUserId from "../stampSheet/CreateGlobalRankingReceivedRewardByUserId";
import CreateClusterRankingReceivedRewardByUserId from "../stampSheet/CreateClusterRankingReceivedRewardByUserId";
import VerifyGlobalRankingScoreByUserId from "../stampSheet/VerifyGlobalRankingScoreByUserId";
import { GlobalRankingScoreVerifyType } from "../stampSheet/enum/GlobalRankingScoreVerifyType";
import VerifyClusterRankingScoreByUserId from "../stampSheet/VerifyClusterRankingScoreByUserId";
import { ClusterRankingScoreVerifyType } from "../stampSheet/enum/ClusterRankingScoreVerifyType";
import VerifySubscribeRankingScoreByUserId from "../stampSheet/VerifySubscribeRankingScoreByUserId";
import { SubscribeRankingScoreVerifyType } from "../stampSheet/enum/SubscribeRankingScoreVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    globalRankingModel(rankingName: string): GlobalRankingModelRef;
    subscribeRankingModel(rankingName: string): SubscribeRankingModelRef;
    clusterRankingModel(rankingName: string): ClusterRankingModelRef;
    createGlobalRankingReceivedReward(rankingName: string, season?: number | null, userId?: string): CreateGlobalRankingReceivedRewardByUserId;
    createClusterRankingReceivedReward(rankingName: string, clusterName: string, season?: number | null, userId?: string): CreateClusterRankingReceivedRewardByUserId;
    verifyGlobalRankingScore(rankingName: string, verifyType: GlobalRankingScoreVerifyType, score: number, season?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyGlobalRankingScoreByUserId;
    verifyClusterRankingScore(rankingName: string, clusterName: string, verifyType: ClusterRankingScoreVerifyType, score: number, season?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifyClusterRankingScoreByUserId;
    verifySubscribeRankingScore(rankingName: string, verifyType: SubscribeRankingScoreVerifyType, score: number, season?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, userId?: string): VerifySubscribeRankingScoreByUserId;
    grn(): string;
}
