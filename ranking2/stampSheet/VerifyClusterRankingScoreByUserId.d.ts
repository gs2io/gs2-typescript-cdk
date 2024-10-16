import { VerifyAction } from "../../core/model";
import { ClusterRankingScoreVerifyType } from "./enum/ClusterRankingScoreVerifyType";
export default class VerifyClusterRankingScoreByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly rankingName;
    private readonly clusterName;
    private readonly verifyType;
    private readonly score;
    private readonly season;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rankingName: string, clusterName: string, verifyType: ClusterRankingScoreVerifyType, score: number, season?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
