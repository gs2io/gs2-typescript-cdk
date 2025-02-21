import VerifyIncludeParticipantByUserId from "../stampSheet/VerifyIncludeParticipantByUserId";
import { SeasonGatheringVerifyType } from "../stampSheet/enums/SeasonGatheringVerifyType";
export default class SeasonModelRef {
    private readonly namespaceName;
    private readonly seasonName;
    constructor(namespaceName: string, seasonName: string);
    verifyIncludeParticipant(season: number, tier: number, verifyType: SeasonGatheringVerifyType, seasonGatheringName?: string | null, userId?: string): VerifyIncludeParticipantByUserId;
    grn(): string;
}
