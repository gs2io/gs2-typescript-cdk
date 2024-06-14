import RatingModelRef from "./RatingModelRef";
import SeasonModelRef from "./SeasonModelRef";
import VerifyIncludeParticipantByUserId from "../stampSheet/VerifyIncludeParticipantByUserId";
import { SeasonGatheringVerifyType } from "../stampSheet/enum/SeasonGatheringVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    ratingModel(ratingName: string): RatingModelRef;
    seasonModel(seasonName: string): SeasonModelRef;
    verifyIncludeParticipant(seasonName: string, season: number, tier: number, verifyType: SeasonGatheringVerifyType, seasonGatheringName?: string | null, userId?: string): VerifyIncludeParticipantByUserId;
    grn(): string;
}
