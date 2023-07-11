import { CounterScopeModelOptions } from "./options/CounterScopeModelOptions";
import { CounterScopeModelResetTypeIsNotResetOptions } from "./options/CounterScopeModelResetTypeIsNotResetOptions";
import { CounterScopeModelResetTypeIsDailyOptions } from "./options/CounterScopeModelResetTypeIsDailyOptions";
import { CounterScopeModelResetTypeIsWeeklyOptions } from "./options/CounterScopeModelResetTypeIsWeeklyOptions";
import { CounterScopeModelResetTypeIsMonthlyOptions } from "./options/CounterScopeModelResetTypeIsMonthlyOptions";
import { CounterScopeModelResetType } from "./enum/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "./enum/CounterScopeModelResetDayOfWeek";
export default class CounterScopeModel {
    private readonly resetType;
    private readonly resetDayOfMonth;
    private readonly resetDayOfWeek;
    private readonly resetHour;
    constructor(resetType: CounterScopeModelResetType, options?: CounterScopeModelOptions | null);
    static resetTypeIsNotReset(options?: CounterScopeModelResetTypeIsNotResetOptions | null): CounterScopeModel;
    static resetTypeIsDaily(resetHour: number, options?: CounterScopeModelResetTypeIsDailyOptions | null): CounterScopeModel;
    static resetTypeIsWeekly(resetDayOfWeek: CounterScopeModelResetDayOfWeek, resetHour: number, options?: CounterScopeModelResetTypeIsWeeklyOptions | null): CounterScopeModel;
    static resetTypeIsMonthly(resetDayOfMonth: number, resetHour: number, options?: CounterScopeModelResetTypeIsMonthlyOptions | null): CounterScopeModel;
    properties(): {
        [name: string]: any;
    };
}
