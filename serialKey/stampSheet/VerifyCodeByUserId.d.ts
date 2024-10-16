import { VerifyAction } from "../../core/model";
import { SerialKeyVerifyType } from "./enum/SerialKeyVerifyType";
export default class VerifyCodeByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly code;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, code: string, verifyType: SerialKeyVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
