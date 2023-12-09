import { ConsumeAction } from "../../core/model";
import { RarityParameterStatusVerifyType } from "./enum/RarityParameterStatusVerifyType";
export default class VerifyRarityParameterStatusByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly parameterName;
    private readonly userId;
    private readonly propertyId;
    private readonly verifyType;
    private readonly parameterValueName;
    private readonly parameterCount;
    constructor(namespaceName: string, parameterName: string, propertyId: string, verifyType: RarityParameterStatusVerifyType, parameterValueName?: string | null, parameterCount?: number | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
