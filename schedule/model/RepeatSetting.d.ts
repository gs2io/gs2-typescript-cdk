import { RepeatSettingOptions } from "./options/RepeatSettingOptions";
import { RepeatSettingRepeatTypeIsAlwaysOptions } from "./options/RepeatSettingRepeatTypeIsAlwaysOptions";
import { RepeatSettingRepeatTypeIsDailyOptions } from "./options/RepeatSettingRepeatTypeIsDailyOptions";
import { RepeatSettingRepeatTypeIsWeeklyOptions } from "./options/RepeatSettingRepeatTypeIsWeeklyOptions";
import { RepeatSettingRepeatTypeIsMonthlyOptions } from "./options/RepeatSettingRepeatTypeIsMonthlyOptions";
import { RepeatSettingRepeatTypeIsCustomOptions } from "./options/RepeatSettingRepeatTypeIsCustomOptions";
import { RepeatSettingRepeatType } from "./enum/RepeatSettingRepeatType";
import { RepeatSettingBeginDayOfWeek } from "./enum/RepeatSettingBeginDayOfWeek";
import { RepeatSettingEndDayOfWeek } from "./enum/RepeatSettingEndDayOfWeek";
export default class RepeatSetting {
    private readonly repeatType;
    private readonly beginDayOfMonth;
    private readonly endDayOfMonth;
    private readonly beginDayOfWeek;
    private readonly endDayOfWeek;
    private readonly beginHour;
    private readonly endHour;
    private readonly anchorTimestamp;
    private readonly activeDays;
    private readonly inactiveDays;
    constructor(repeatType: RepeatSettingRepeatType, options?: RepeatSettingOptions | null);
    static repeatTypeIsAlways(options?: RepeatSettingRepeatTypeIsAlwaysOptions | null): RepeatSetting;
    static repeatTypeIsDaily(beginHour: number, endHour: number, options?: RepeatSettingRepeatTypeIsDailyOptions | null): RepeatSetting;
    static repeatTypeIsWeekly(beginDayOfWeek: RepeatSettingBeginDayOfWeek, endDayOfWeek: RepeatSettingEndDayOfWeek, beginHour: number, endHour: number, options?: RepeatSettingRepeatTypeIsWeeklyOptions | null): RepeatSetting;
    static repeatTypeIsMonthly(beginDayOfMonth: number, endDayOfMonth: number, beginHour: number, endHour: number, options?: RepeatSettingRepeatTypeIsMonthlyOptions | null): RepeatSetting;
    static repeatTypeIsCustom(anchorTimestamp: number, activeDays: number, inactiveDays: number, options?: RepeatSettingRepeatTypeIsCustomOptions | null): RepeatSetting;
    properties(): {
        [name: string]: any;
    };
}
