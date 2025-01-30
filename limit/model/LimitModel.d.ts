import { LimitModelOptions } from "./options/LimitModelOptions";
import { LimitModelResetTypeIsNotResetOptions } from "./options/LimitModelResetTypeIsNotResetOptions";
import { LimitModelResetTypeIsDailyOptions } from "./options/LimitModelResetTypeIsDailyOptions";
import { LimitModelResetTypeIsWeeklyOptions } from "./options/LimitModelResetTypeIsWeeklyOptions";
import { LimitModelResetTypeIsMonthlyOptions } from "./options/LimitModelResetTypeIsMonthlyOptions";
import { LimitModelResetTypeIsDaysOptions } from "./options/LimitModelResetTypeIsDaysOptions";
import { LimitModelResetType } from "./enum/LimitModelResetType";
import { LimitModelResetDayOfWeek } from "./enum/LimitModelResetDayOfWeek";
export default class LimitModel {
    private readonly name;
    private readonly resetType;
    private readonly metadata;
    private readonly resetDayOfMonth;
    private readonly resetDayOfWeek;
    private readonly resetHour;
    private readonly anchorTimestamp;
    private readonly days;
    constructor(name: string, resetType: LimitModelResetType, options?: LimitModelOptions | null);
    static resetTypeIsNotReset(name: string, options?: LimitModelResetTypeIsNotResetOptions | null): LimitModel;
    static resetTypeIsDaily(name: string, resetHour: number, options?: LimitModelResetTypeIsDailyOptions | null): LimitModel;
    static resetTypeIsWeekly(name: string, resetDayOfWeek: LimitModelResetDayOfWeek, resetHour: number, options?: LimitModelResetTypeIsWeeklyOptions | null): LimitModel;
    static resetTypeIsMonthly(name: string, resetDayOfMonth: number, resetHour: number, options?: LimitModelResetTypeIsMonthlyOptions | null): LimitModel;
    static resetTypeIsDays(name: string, anchorTimestamp: number, days: number, options?: LimitModelResetTypeIsDaysOptions | null): LimitModel;
    properties(): {
        [name: string]: any;
    };
}
