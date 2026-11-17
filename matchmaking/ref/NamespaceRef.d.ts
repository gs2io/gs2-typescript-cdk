import RatingModelRef from "./RatingModelRef";
import SeasonModelRef from "./SeasonModelRef";
import VerifyIncludeParticipantByUserId from "../stampSheet/VerifyIncludeParticipantByUserId";
import { SeasonGatheringVerifyType } from "../stampSheet/enums/SeasonGatheringVerifyType";
import VerifyRatingByUserId from "../stampSheet/VerifyRatingByUserId";
import { RatingVerifyType } from "../stampSheet/enums/RatingVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    ratingModel(ratingName: string): RatingModelRef;
    seasonModel(seasonName: string): SeasonModelRef;
    verifyIncludeParticipant(seasonName: string, season: number, tier: number, verifyType: SeasonGatheringVerifyType, seasonGatheringName?: string | null, userId?: string): VerifyIncludeParticipantByUserId;
    verifyRating(ratingName: string, verifyType: RatingVerifyType, rateValue: number, userId?: string): VerifyRatingByUserId;
    grn(): string;
}
