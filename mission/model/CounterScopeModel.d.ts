import { VerifyAction } from "../../core/model";
import { CounterScopeModelOptions } from "./options/CounterScopeModelOptions";
import { CounterScopeModelScopeTypeIsResetTimingOptions } from "./options/CounterScopeModelScopeTypeIsResetTimingOptions";
import { CounterScopeModelScopeTypeIsVerifyActionOptions } from "./options/CounterScopeModelScopeTypeIsVerifyActionOptions";
import { CounterScopeModelResetTypeIsNotResetOptions } from "./options/CounterScopeModelResetTypeIsNotResetOptions";
import { CounterScopeModelResetTypeIsDailyOptions } from "./options/CounterScopeModelResetTypeIsDailyOptions";
import { CounterScopeModelResetTypeIsWeeklyOptions } from "./options/CounterScopeModelResetTypeIsWeeklyOptions";
import { CounterScopeModelResetTypeIsMonthlyOptions } from "./options/CounterScopeModelResetTypeIsMonthlyOptions";
import { CounterScopeModelScopeType } from "./enum/CounterScopeModelScopeType";
import { CounterScopeModelResetType } from "./enum/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "./enum/CounterScopeModelResetDayOfWeek";
export default class CounterScopeModel {
    private readonly scopeType;
    private readonly resetType;
    private readonly resetDayOfMonth;
    private readonly resetDayOfWeek;
    private readonly resetHour;
    private readonly conditionName;
    private readonly condition;
    constructor(scopeType: CounterScopeModelScopeType, options?: CounterScopeModelOptions | null);
    static scopeTypeIsResetTiming(resetType: CounterScopeModelResetType, options?: CounterScopeModelScopeTypeIsResetTimingOptions | null): CounterScopeModel;
    static scopeTypeIsVerifyAction(conditionName: string, condition: VerifyAction, options?: CounterScopeModelScopeTypeIsVerifyActionOptions | null): CounterScopeModel;
    static resetTypeIsNotReset(scopeType: CounterScopeModelScopeType, options?: CounterScopeModelResetTypeIsNotResetOptions | null): CounterScopeModel;
    static resetTypeIsDaily(scopeType: CounterScopeModelScopeType, resetHour: number, options?: CounterScopeModelResetTypeIsDailyOptions | null): CounterScopeModel;
    static resetTypeIsWeekly(scopeType: CounterScopeModelScopeType, resetDayOfWeek: CounterScopeModelResetDayOfWeek, resetHour: number, options?: CounterScopeModelResetTypeIsWeeklyOptions | null): CounterScopeModel;
    static resetTypeIsMonthly(scopeType: CounterScopeModelScopeType, resetDayOfMonth: number, resetHour: number, options?: CounterScopeModelResetTypeIsMonthlyOptions | null): CounterScopeModel;
    properties(): {
        [name: string]: any;
    };
}
