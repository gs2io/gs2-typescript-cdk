import { ConsumeAction } from "../../core/model";
export default class CreateGlobalRankingReceivedRewardByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly rankingName;
    private readonly userId;
    private readonly season;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rankingName: string, season?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
