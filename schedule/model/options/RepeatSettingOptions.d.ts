import { RepeatSettingBeginDayOfWeek } from "../enums/RepeatSettingBeginDayOfWeek";
import { RepeatSettingEndDayOfWeek } from "../enums/RepeatSettingEndDayOfWeek";
export interface RepeatSettingOptions {
    beginDayOfMonth?: number | null;
    endDayOfMonth?: number | null;
    beginDayOfWeek?: RepeatSettingBeginDayOfWeek | null;
    endDayOfWeek?: RepeatSettingEndDayOfWeek | null;
    beginHour?: number | null;
    endHour?: number | null;
    anchorTimestamp?: number | null;
    activeDays?: number | null;
    inactiveDays?: number | null;
}
