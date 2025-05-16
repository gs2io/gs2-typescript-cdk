import { VerifyAction } from "../../core/model";
import { CounterScopeModelOptions } from "./options/CounterScopeModelOptions";
import { CounterScopeModelResetTypeIsNotResetOptions } from "./options/CounterScopeModelResetTypeIsNotResetOptions";
import { CounterScopeModelResetTypeIsDailyOptions } from "./options/CounterScopeModelResetTypeIsDailyOptions";
import { CounterScopeModelResetTypeIsWeeklyOptions } from "./options/CounterScopeModelResetTypeIsWeeklyOptions";
import { CounterScopeModelResetTypeIsMonthlyOptions } from "./options/CounterScopeModelResetTypeIsMonthlyOptions";
import { CounterScopeModelResetTypeIsDaysOptions } from "./options/CounterScopeModelResetTypeIsDaysOptions";
import { CounterScopeModelScopeTypeIsResetTimingOptions } from "./options/CounterScopeModelScopeTypeIsResetTimingOptions";
import { CounterScopeModelScopeTypeIsVerifyActionOptions } from "./options/CounterScopeModelScopeTypeIsVerifyActionOptions";
import { CounterScopeModelScopeType } from "./enums/CounterScopeModelScopeType";
import { CounterScopeModelResetType } from "./enums/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "./enums/CounterScopeModelResetDayOfWeek";
export default class CounterScopeModel {
    private readonly scopeType;
    private readonly resetType;
    private readonly resetDayOfMonth;
    private readonly resetDayOfWeek;
    private readonly resetHour;
    private readonly conditionName;
    private readonly condition;
    private readonly anchorTimestamp;
    private readonly days;
    constructor(scopeType: CounterScopeModelScopeType, resetType: CounterScopeModelResetType, options?: CounterScopeModelOptions | null);
    static resetTypeIsNotReset(scopeType: CounterScopeModelScopeType, options?: CounterScopeModelResetTypeIsNotResetOptions | null): CounterScopeModel;
    static resetTypeIsDaily(scopeType: CounterScopeModelScopeType, resetHour: number, options?: CounterScopeModelResetTypeIsDailyOptions | null): CounterScopeModel;
    static resetTypeIsWeekly(scopeType: CounterScopeModelScopeType, resetDayOfWeek: CounterScopeModelResetDayOfWeek, resetHour: number, options?: CounterScopeModelResetTypeIsWeeklyOptions | null): CounterScopeModel;
    static resetTypeIsMonthly(scopeType: CounterScopeModelScopeType, resetDayOfMonth: number, resetHour: number, options?: CounterScopeModelResetTypeIsMonthlyOptions | null): CounterScopeModel;
    static resetTypeIsDays(scopeType: CounterScopeModelScopeType, anchorTimestamp: number, days: number, options?: CounterScopeModelResetTypeIsDaysOptions | null): CounterScopeModel;
    static scopeTypeIsResetTiming(resetType: CounterScopeModelResetType, options?: CounterScopeModelScopeTypeIsResetTimingOptions | null): CounterScopeModel;
    static scopeTypeIsVerifyAction(resetType: CounterScopeModelResetType, conditionName: string, condition: VerifyAction, options?: CounterScopeModelScopeTypeIsVerifyActionOptions | null): CounterScopeModel;
    properties(): {
        [name: string]: any;
    };
}
