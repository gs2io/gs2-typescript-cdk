import { VerifyAction } from "../../core/model";
import { BalanceParameterStatusVerifyType } from "./enums/BalanceParameterStatusVerifyType";
export default class VerifyBalanceParameterStatusByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly parameterName;
    private readonly propertyId;
    private readonly parameterValueName;
    private readonly verifyType;
    private readonly parameterValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, parameterName: string, propertyId: string, parameterValueName: string, verifyType: BalanceParameterStatusVerifyType, parameterValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
