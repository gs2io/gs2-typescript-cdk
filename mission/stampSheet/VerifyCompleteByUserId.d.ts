import { ConsumeAction } from "../../core/model";
import { CompleteVerifyType } from "./enum/CompleteVerifyType";
export default class VerifyCompleteByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly missionGroupName;
    private readonly userId;
    private readonly verifyType;
    private readonly missionTaskName;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, missionGroupName: string, verifyType: CompleteVerifyType, missionTaskName: string, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
