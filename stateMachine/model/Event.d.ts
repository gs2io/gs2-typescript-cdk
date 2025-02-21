import ChangeStateEvent from "./ChangeStateEvent";
import EmitEvent from "./EmitEvent";
import { EventOptions } from "./options/EventOptions";
import { EventEventTypeIsChangeStateOptions } from "./options/EventEventTypeIsChangeStateOptions";
import { EventEventTypeIsEmitOptions } from "./options/EventEventTypeIsEmitOptions";
import { EventEventType } from "./enums/EventEventType";
export default class Event {
    private readonly eventType;
    private readonly changeStateEvent;
    private readonly emitEvent;
    constructor(eventType: EventEventType, options?: EventOptions | null);
    static eventTypeIsChangeState(changeStateEvent: ChangeStateEvent, options?: EventEventTypeIsChangeStateOptions | null): Event;
    static eventTypeIsEmit(emitEvent: EmitEvent, options?: EventEventTypeIsEmitOptions | null): Event;
    properties(): {
        [name: string]: any;
    };
}
