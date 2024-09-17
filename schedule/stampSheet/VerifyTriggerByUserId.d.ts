import { VerifyAction } from "../../core/model";
import { TriggerVerifyType } from "./enum/TriggerVerifyType";
export default class VerifyTriggerByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly triggerName;
    private readonly verifyType;
    private readonly elapsedMinutes;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, triggerName: string, verifyType: TriggerVerifyType, elapsedMinutes?: number | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
