import { VerifyAction } from "../../core/model";
import { SerialKeyVerifyType } from "./enums/SerialKeyVerifyType";
export default class VerifyCodeByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly code;
    private readonly verifyType;
    private readonly campaignModelName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, code: string, verifyType: SerialKeyVerifyType, campaignModelName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
