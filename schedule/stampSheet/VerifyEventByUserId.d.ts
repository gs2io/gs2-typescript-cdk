import { ConsumeAction } from "../../core/model";
import { EventVerifyType } from "./enum/EventVerifyType";
export default class VerifyEventByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly eventName;
    private readonly verifyType;
    constructor(namespaceName: string, eventName: string, verifyType: EventVerifyType, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
