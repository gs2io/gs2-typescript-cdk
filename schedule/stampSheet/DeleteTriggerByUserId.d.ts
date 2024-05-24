import { ConsumeAction } from "../../core/model";
export default class DeleteTriggerByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly triggerName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, triggerName: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
