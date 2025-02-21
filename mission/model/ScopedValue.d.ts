import { ScopedValueOptions } from "./options/ScopedValueOptions";
import { ScopedValueScopeTypeIsResetTimingOptions } from "./options/ScopedValueScopeTypeIsResetTimingOptions";
import { ScopedValueScopeTypeIsVerifyActionOptions } from "./options/ScopedValueScopeTypeIsVerifyActionOptions";
import { ScopedValueScopeType } from "./enums/ScopedValueScopeType";
import { ScopedValueResetType } from "./enums/ScopedValueResetType";
export default class ScopedValue {
    private readonly scopeType;
    private readonly value;
    private readonly resetType;
    private readonly conditionName;
    private readonly nextResetAt;
    constructor(scopeType: ScopedValueScopeType, value: number, options?: ScopedValueOptions | null);
    static scopeTypeIsResetTiming(value: number, resetType: ScopedValueResetType, options?: ScopedValueScopeTypeIsResetTimingOptions | null): ScopedValue;
    static scopeTypeIsVerifyAction(value: number, conditionName: string, options?: ScopedValueScopeTypeIsVerifyActionOptions | null): ScopedValue;
    properties(): {
        [name: string]: any;
    };
}
