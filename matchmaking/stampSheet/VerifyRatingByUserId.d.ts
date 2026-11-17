import { VerifyAction } from "../../core/model";
import { RatingVerifyType } from "./enums/RatingVerifyType";
export default class VerifyRatingByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly ratingName;
    private readonly verifyType;
    private readonly rateValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, ratingName: string, verifyType: RatingVerifyType, rateValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
