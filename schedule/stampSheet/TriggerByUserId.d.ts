import { AcquireAction } from "../../core/model";
export default class TriggerByUserId extends AcquireAction {
    constructor(namespaceName: string, triggerName: string, triggerStrategy: string, ttl: number, userId?: string | null);
}
