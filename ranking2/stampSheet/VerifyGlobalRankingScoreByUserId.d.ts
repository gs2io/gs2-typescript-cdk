import { VerifyAction } from "../../core/model";
import { GlobalRankingScoreVerifyType } from "./enum/GlobalRankingScoreVerifyType";
export default class VerifyGlobalRankingScoreByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly rankingName;
    private readonly verifyType;
    private readonly score;
    private readonly season;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rankingName: string, verifyType: GlobalRankingScoreVerifyType, score: number, season?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
