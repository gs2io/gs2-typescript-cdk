import { RepeatSettingBeginDayOfWeek } from "../enum/RepeatSettingBeginDayOfWeek";
import { RepeatSettingEndDayOfWeek } from "../enum/RepeatSettingEndDayOfWeek";
export interface RepeatSettingOptions {
    beginDayOfMonth?: number | null;
    endDayOfMonth?: number | null;
    beginDayOfWeek?: RepeatSettingBeginDayOfWeek | null;
    endDayOfWeek?: RepeatSettingEndDayOfWeek | null;
    beginHour?: number | null;
    endHour?: number | null;
}
