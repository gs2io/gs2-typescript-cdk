import TriggerByUserId from "../stampSheet/TriggerByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    trigger(triggerName: string, triggerStrategy: string, ttl: number, userId?: string | null): TriggerByUserId;
    grn(): string;
}
