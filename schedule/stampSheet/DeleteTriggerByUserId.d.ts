import { ConsumeAction } from "../../core/model";
export default class DeleteTriggerByUserId extends ConsumeAction {
    constructor(namespaceName: string, triggerName: string, userId?: string | null);
}
