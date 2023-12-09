import { ConsumeAction } from "../../core/model";
export default class DeleteTriggerByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly triggerName;
    constructor(namespaceName: string, triggerName: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
