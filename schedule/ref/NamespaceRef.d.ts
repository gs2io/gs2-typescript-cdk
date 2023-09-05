import TriggerByUserId from "../stampSheet/TriggerByUserId";
import DeleteTriggerByUserId from "../stampSheet/DeleteTriggerByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    trigger(triggerName: string, triggerStrategy: string, ttl: number, userId?: string | null): TriggerByUserId;
    deleteTrigger(triggerName: string, userId?: string | null): DeleteTriggerByUserId;
    grn(): string;
}
