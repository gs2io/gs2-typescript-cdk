import { VerifyAction } from "../../core/model";
import { StaminaVerifyType } from "./enums/StaminaVerifyType";
export default class VerifyStaminaValueByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly staminaName;
    private readonly verifyType;
    private readonly value;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, staminaName: string, verifyType: StaminaVerifyType, value: number, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
