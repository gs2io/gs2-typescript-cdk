import { AcquireActionRateOptions } from "./options/AcquireActionRateOptions";
import { AcquireActionRateModeIsDoubleOptions } from "./options/AcquireActionRateModeIsDoubleOptions";
import { AcquireActionRateModeIsBigOptions } from "./options/AcquireActionRateModeIsBigOptions";
import { AcquireActionRateMode } from "./enum/AcquireActionRateMode";
export default class AcquireActionRate {
    private readonly name;
    private readonly mode;
    private readonly rates;
    private readonly bigRates;
    constructor(name: string, mode: AcquireActionRateMode, options?: AcquireActionRateOptions | null);
    static modeIsDouble(name: string, rates: number[], options?: AcquireActionRateModeIsDoubleOptions | null): AcquireActionRate;
    static modeIsBig(name: string, bigRates: string[], options?: AcquireActionRateModeIsBigOptions | null): AcquireActionRate;
    properties(): {
        [name: string]: any;
    };
}
