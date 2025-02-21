import { EventRepeatType } from "../enums/EventRepeatType";
import { EventRepeatBeginDayOfWeek } from "../enums/EventRepeatBeginDayOfWeek";
import { EventRepeatEndDayOfWeek } from "../enums/EventRepeatEndDayOfWeek";
export interface EventOptions {
    repeatType?: EventRepeatType | null;
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
