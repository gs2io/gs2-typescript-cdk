import { EventOptions } from "./options/EventOptions";
import { EventScheduleTypeIsAbsoluteOptions } from "./options/EventScheduleTypeIsAbsoluteOptions";
import { EventScheduleTypeIsRelativeOptions } from "./options/EventScheduleTypeIsRelativeOptions";
import { EventRepeatTypeIsAlwaysOptions } from "./options/EventRepeatTypeIsAlwaysOptions";
import { EventRepeatTypeIsDailyOptions } from "./options/EventRepeatTypeIsDailyOptions";
import { EventRepeatTypeIsWeeklyOptions } from "./options/EventRepeatTypeIsWeeklyOptions";
import { EventRepeatTypeIsMonthlyOptions } from "./options/EventRepeatTypeIsMonthlyOptions";
import { EventScheduleType } from "./enum/EventScheduleType";
import { EventRepeatType } from "./enum/EventRepeatType";
import { EventRepeatBeginDayOfWeek } from "./enum/EventRepeatBeginDayOfWeek";
import { EventRepeatEndDayOfWeek } from "./enum/EventRepeatEndDayOfWeek";
export default class Event {
    private readonly name;
    private readonly scheduleType;
    private readonly repeatType;
    private readonly metadata;
    private readonly absoluteBegin;
    private readonly absoluteEnd;
    private readonly repeatBeginDayOfMonth;
    private readonly repeatEndDayOfMonth;
    private readonly repeatBeginDayOfWeek;
    private readonly repeatEndDayOfWeek;
    private readonly repeatBeginHour;
    private readonly repeatEndHour;
    private readonly relativeTriggerName;
    constructor(name: string, scheduleType: EventScheduleType, repeatType: EventRepeatType, options?: EventOptions | null);
    static scheduleTypeIsAbsolute(name: string, repeatType: EventRepeatType, absoluteBegin: number, absoluteEnd: number, options?: EventScheduleTypeIsAbsoluteOptions | null): Event;
    static scheduleTypeIsRelative(name: string, repeatType: EventRepeatType, relativeTriggerName: string, options?: EventScheduleTypeIsRelativeOptions | null): Event;
    static repeatTypeIsAlways(name: string, scheduleType: EventScheduleType, options?: EventRepeatTypeIsAlwaysOptions | null): Event;
    static repeatTypeIsDaily(name: string, scheduleType: EventScheduleType, repeatBeginHour: number, repeatEndHour: number, options?: EventRepeatTypeIsDailyOptions | null): Event;
    static repeatTypeIsWeekly(name: string, scheduleType: EventScheduleType, repeatBeginDayOfWeek: EventRepeatBeginDayOfWeek, repeatEndDayOfWeek: EventRepeatEndDayOfWeek, repeatBeginHour: number, repeatEndHour: number, options?: EventRepeatTypeIsWeeklyOptions | null): Event;
    static repeatTypeIsMonthly(name: string, scheduleType: EventScheduleType, repeatBeginDayOfMonth: number, repeatEndDayOfMonth: number, repeatBeginHour: number, repeatEndHour: number, options?: EventRepeatTypeIsMonthlyOptions | null): Event;
    properties(): {
        [name: string]: any;
    };
}
