import VerifyRatingByUserId from "../stampSheet/VerifyRatingByUserId";
import { RatingVerifyType } from "../stampSheet/enums/RatingVerifyType";
export default class RatingModelRef {
    private readonly namespaceName;
    private readonly ratingName;
    constructor(namespaceName: string, ratingName: string);
    verifyRating(verifyType: RatingVerifyType, rateValue: number, userId?: string): VerifyRatingByUserId;
    grn(): string;
}
