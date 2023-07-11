import { BonusRateOptions } from "./options/BonusRateOptions";
export default class BonusRate {
    private readonly rate;
    private readonly weight;
    constructor(rate: number, weight: number, options?: BonusRateOptions | null);
    properties(): {
        [name: string]: any;
    };
}
