import { EventRepeatBeginDayOfWeek } from "../enum/EventRepeatBeginDayOfWeek";
import { EventRepeatEndDayOfWeek } from "../enum/EventRepeatEndDayOfWeek";
export interface EventOptions {
    metadata?: string | null;
    absoluteBegin?: number | null;
    absoluteEnd?: number | null;
    relativeTriggerName?: string | null;
    repeatBeginDayOfMonth?: number | null;
    repeatEndDayOfMonth?: number | null;
    repeatBeginDayOfWeek?: EventRepeatBeginDayOfWeek | null;
    repeatEndDayOfWeek?: EventRepeatEndDayOfWeek | null;
    repeatBeginHour?: number | null;
    repeatEndHour?: number | null;
}
