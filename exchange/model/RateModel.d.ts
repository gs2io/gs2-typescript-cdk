import { RateModelOptions } from "./options/RateModelOptions";
import { RateModelTimingTypeIsImmediateOptions } from "./options/RateModelTimingTypeIsImmediateOptions";
import { RateModelTimingTypeIsAwaitOptions } from "./options/RateModelTimingTypeIsAwaitOptions";
import { RateModelTimingType } from "./enums/RateModelTimingType";
export default class RateModel {
    private readonly name;
    private readonly timingType;
    private readonly metadata;
    private readonly verifyActions;
    private readonly consumeActions;
    private readonly lockTime;
    private readonly acquireActions;
    constructor(name: string, timingType: RateModelTimingType, options?: RateModelOptions | null);
    static timingTypeIsImmediate(name: string, options?: RateModelTimingTypeIsImmediateOptions | null): RateModel;
    static timingTypeIsAwait(name: string, lockTime: number, options?: RateModelTimingTypeIsAwaitOptions | null): RateModel;
    properties(): {
        [name: string]: any;
    };
}
