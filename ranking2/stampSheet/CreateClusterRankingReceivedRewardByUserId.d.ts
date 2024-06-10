import { ConsumeAction } from "../../core/model";
export default class CreateClusterRankingReceivedRewardByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly rankingName;
    private readonly clusterName;
    private readonly userId;
    private readonly season;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, rankingName: string, clusterName: string, season?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
