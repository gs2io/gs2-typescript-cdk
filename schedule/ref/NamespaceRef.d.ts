import TriggerByUserId from "../stampSheet/TriggerByUserId";
import { TriggerTriggerStrategy } from "../stampSheet/enum/TriggerTriggerStrategy";
import DeleteTriggerByUserId from "../stampSheet/DeleteTriggerByUserId";
import VerifyEventByUserId from "../stampSheet/VerifyEventByUserId";
import { EventVerifyType } from "../stampSheet/enum/EventVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    trigger(triggerName: string, triggerStrategy: TriggerTriggerStrategy, ttl: number, userId?: string): TriggerByUserId;
    deleteTrigger(triggerName: string, userId?: string): DeleteTriggerByUserId;
    verifyEvent(eventName: string, verifyType: EventVerifyType, userId?: string): VerifyEventByUserId;
    grn(): string;
}
