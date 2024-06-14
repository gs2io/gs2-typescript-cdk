import { ConsumeAction } from "../../core/model";
import { SeasonGatheringVerifyType } from "./enum/SeasonGatheringVerifyType";
export default class VerifyIncludeParticipantByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly seasonName;
    private readonly season;
    private readonly tier;
    private readonly userId;
    private readonly verifyType;
    private readonly seasonGatheringName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, seasonName: string, season: number, tier: number, verifyType: SeasonGatheringVerifyType, seasonGatheringName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
