import { VerifyAction } from "../../core/model";
import { StatusVerifyType } from "./enum/StatusVerifyType";
export default class VerifyRankByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly rankValue;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, experienceName: string, verifyType: StatusVerifyType, propertyId: string, rankValue?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
