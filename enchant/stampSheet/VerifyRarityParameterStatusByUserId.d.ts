import { VerifyAction } from "../../core/model";
import { RarityParameterStatusVerifyType } from "./enum/RarityParameterStatusVerifyType";
export default class VerifyRarityParameterStatusByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly parameterName;
    private readonly userId;
    private readonly propertyId;
    private readonly verifyType;
    private readonly parameterValueName;
    private readonly parameterCount;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, parameterName: string, propertyId: string, verifyType: RarityParameterStatusVerifyType, parameterValueName?: string | null, parameterCount?: number | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
