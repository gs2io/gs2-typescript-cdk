import { VerifyAction } from "../../core/model";
import { EventVerifyType } from "./enum/EventVerifyType";
export default class VerifyEventByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly eventName;
    private readonly verifyType;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, eventName: string, verifyType: EventVerifyType, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
