import { ConsumeAction } from "../../core/model";
import { StatusVerifyType } from "./enum/StatusVerifyType";
export default class VerifyRankCapByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly experienceName;
    private readonly verifyType;
    private readonly propertyId;
    private readonly rankCapValue;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, experienceName: string, verifyType: StatusVerifyType, propertyId: string, rankCapValue: number, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
