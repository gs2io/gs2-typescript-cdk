import TriggerByUserId from "../stampSheet/TriggerByUserId";
import { TriggerTriggerStrategy } from "../stampSheet/enums/TriggerTriggerStrategy";
import ExtendTriggerByUserId from "../stampSheet/ExtendTriggerByUserId";
import DeleteTriggerByUserId from "../stampSheet/DeleteTriggerByUserId";
import VerifyTriggerByUserId from "../stampSheet/VerifyTriggerByUserId";
import { TriggerVerifyType } from "../stampSheet/enums/TriggerVerifyType";
import VerifyEventByUserId from "../stampSheet/VerifyEventByUserId";
import { EventVerifyType } from "../stampSheet/enums/EventVerifyType";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    trigger(triggerName: string, triggerStrategy: TriggerTriggerStrategy, ttl?: number | null, eventId?: string | null, userId?: string): TriggerByUserId;
    extendTrigger(triggerName: string, extendSeconds: number, userId?: string): ExtendTriggerByUserId;
    deleteTrigger(triggerName: string, userId?: string): DeleteTriggerByUserId;
    verifyTrigger(triggerName: string, verifyType: TriggerVerifyType, elapsedMinutes?: number | null, userId?: string): VerifyTriggerByUserId;
    verifyEvent(eventName: string, verifyType: EventVerifyType, userId?: string): VerifyEventByUserId;
    grn(): string;
}
