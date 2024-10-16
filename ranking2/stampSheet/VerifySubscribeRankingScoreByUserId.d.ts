import { VerifyAction } from "../../core/model";
import { SubscribeRankingScoreVerifyType } from "./enum/SubscribeRankingScoreVerifyType";
export default class VerifySubscribeRankingScoreByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly rankingName;
    private readonly verifyType;
    private readonly score;
    private readonly season;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rankingName: string, verifyType: SubscribeRankingScoreVerifyType, score: number, season?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
