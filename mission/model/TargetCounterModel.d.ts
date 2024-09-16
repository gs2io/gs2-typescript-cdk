import { TargetCounterModelOptions } from "./options/TargetCounterModelOptions";
import { TargetCounterModelScopeTypeIsResetTimingOptions } from "./options/TargetCounterModelScopeTypeIsResetTimingOptions";
import { TargetCounterModelScopeTypeIsVerifyActionOptions } from "./options/TargetCounterModelScopeTypeIsVerifyActionOptions";
import { TargetCounterModelScopeType } from "./enum/TargetCounterModelScopeType";
export default class TargetCounterModel {
    private readonly counterName;
    private readonly scopeType;
    private readonly value;
    private readonly resetType;
    private readonly conditionName;
    constructor(counterName: string, scopeType: TargetCounterModelScopeType, value: number, options?: TargetCounterModelOptions | null);
    static scopeTypeIsResetTiming(counterName: string, value: number, options?: TargetCounterModelScopeTypeIsResetTimingOptions | null): TargetCounterModel;
    static scopeTypeIsVerifyAction(counterName: string, value: number, conditionName: string, options?: TargetCounterModelScopeTypeIsVerifyActionOptions | null): TargetCounterModel;
    properties(): {
        [name: string]: any;
    };
}
