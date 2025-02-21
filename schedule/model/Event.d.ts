import RepeatSetting from "./RepeatSetting";
import { EventOptions } from "./options/EventOptions";
import { EventScheduleTypeIsAbsoluteOptions } from "./options/EventScheduleTypeIsAbsoluteOptions";
import { EventScheduleTypeIsRelativeOptions } from "./options/EventScheduleTypeIsRelativeOptions";
import { EventRepeatTypeIsAlwaysOptions } from "./options/EventRepeatTypeIsAlwaysOptions";
import { EventRepeatTypeIsDailyOptions } from "./options/EventRepeatTypeIsDailyOptions";
import { EventRepeatTypeIsWeeklyOptions } from "./options/EventRepeatTypeIsWeeklyOptions";
import { EventRepeatTypeIsMonthlyOptions } from "./options/EventRepeatTypeIsMonthlyOptions";
import { EventScheduleType } from "./enums/EventScheduleType";
import { EventRepeatBeginDayOfWeek } from "./enums/EventRepeatBeginDayOfWeek";
import { EventRepeatEndDayOfWeek } from "./enums/EventRepeatEndDayOfWeek";
export default class Event {
    private readonly name;
    private readonly scheduleType;
    private readonly repeatSetting;
    private readonly repeatType;
    private readonly metadata;
    private readonly absoluteBegin;
    private readonly absoluteEnd;
    private readonly relativeTriggerName;
    private readonly repeatBeginDayOfMonth;
    private readonly repeatEndDayOfMonth;
    private readonly repeatBeginDayOfWeek;
    private readonly repeatEndDayOfWeek;
    private readonly repeatBeginHour;
    private readonly repeatEndHour;
    constructor(name: string, scheduleType: EventScheduleType, repeatSetting: RepeatSetting, options?: EventOptions | null);
    static scheduleTypeIsAbsolute(name: string, repeatSetting: RepeatSetting, options?: EventScheduleTypeIsAbsoluteOptions | null): Event;
    static scheduleTypeIsRelative(name: string, repeatSetting: RepeatSetting, relativeTriggerName: string, options?: EventScheduleTypeIsRelativeOptions | null): Event;
    static repeatTypeIsAlways(name: string, scheduleType: EventScheduleType, repeatSetting: RepeatSetting, options?: EventRepeatTypeIsAlwaysOptions | null): Event;
    static repeatTypeIsDaily(name: string, scheduleType: EventScheduleType, repeatSetting: RepeatSetting, repeatBeginHour: number, repeatEndHour: number, options?: EventRepeatTypeIsDailyOptions | null): Event;
    static repeatTypeIsWeekly(name: string, scheduleType: EventScheduleType, repeatSetting: RepeatSetting, repeatBeginDayOfWeek: EventRepeatBeginDayOfWeek, repeatEndDayOfWeek: EventRepeatEndDayOfWeek, repeatBeginHour: number, repeatEndHour: number, options?: EventRepeatTypeIsWeeklyOptions | null): Event;
    static repeatTypeIsMonthly(name: string, scheduleType: EventScheduleType, repeatSetting: RepeatSetting, repeatBeginDayOfMonth: number, repeatEndDayOfMonth: number, repeatBeginHour: number, repeatEndHour: number, options?: EventRepeatTypeIsMonthlyOptions | null): Event;
    properties(): {
        [name: string]: any;
    };
}
