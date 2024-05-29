import { OverrideBuffRateOptions } from "./options/OverrideBuffRateOptions";
export default class OverrideBuffRate {
    private readonly name;
    private readonly rate;
    constructor(name: string, rate: number, options?: OverrideBuffRateOptions | null);
    properties(): {
        [name: string]: any;
    };
}
