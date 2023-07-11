import { ConsumeAction } from "../../core/model";
import { IncrementalRateModelOptions } from "./options/IncrementalRateModelOptions";
import { IncrementalRateModelCalculateTypeIsLinearOptions } from "./options/IncrementalRateModelCalculateTypeIsLinearOptions";
import { IncrementalRateModelCalculateTypeIsPowerOptions } from "./options/IncrementalRateModelCalculateTypeIsPowerOptions";
import { IncrementalRateModelCalculateTypeIsGs2ScriptOptions } from "./options/IncrementalRateModelCalculateTypeIsGs2ScriptOptions";
import { IncrementalRateModelCalculateType } from "./enum/IncrementalRateModelCalculateType";
export default class IncrementalRateModel {
    private readonly name;
    private readonly consumeAction;
    private readonly calculateType;
    private readonly exchangeCountId;
    private readonly metadata;
    private readonly baseValue;
    private readonly coefficientValue;
    private readonly calculateScriptId;
    private readonly acquireActions;
    constructor(name: string, consumeAction: ConsumeAction, calculateType: IncrementalRateModelCalculateType, exchangeCountId: string, options?: IncrementalRateModelOptions | null);
    static calculateTypeIsLinear(name: string, consumeAction: ConsumeAction, exchangeCountId: string, baseValue: number, coefficientValue: number, options?: IncrementalRateModelCalculateTypeIsLinearOptions | null): IncrementalRateModel;
    static calculateTypeIsPower(name: string, consumeAction: ConsumeAction, exchangeCountId: string, coefficientValue: number, options?: IncrementalRateModelCalculateTypeIsPowerOptions | null): IncrementalRateModel;
    static calculateTypeIsGs2Script(name: string, consumeAction: ConsumeAction, exchangeCountId: string, calculateScriptId: string, options?: IncrementalRateModelCalculateTypeIsGs2ScriptOptions | null): IncrementalRateModel;
    properties(): {
        [name: string]: any;
    };
}
