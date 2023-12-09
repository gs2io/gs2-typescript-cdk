import TriggerByUserId from "../stampSheet/TriggerByUserId";
import { TriggerTriggerStrategy } from "../stampSheet/enum/TriggerTriggerStrategy";
import DeleteTriggerByUserId from "../stampSheet/DeleteTriggerByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    trigger(triggerName: string, triggerStrategy: TriggerTriggerStrategy, ttl: number, userId?: string): TriggerByUserId;
    deleteTrigger(triggerName: string, userId?: string): DeleteTriggerByUserId;
    grn(): string;
}
