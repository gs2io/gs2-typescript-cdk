import { AcquireActionRateOptions } from "./options/AcquireActionRateOptions";
export default class AcquireActionRate {
    private readonly name;
    private readonly rates;
    constructor(name: string, rates: number[], options?: AcquireActionRateOptions | null);
    properties(): {
        [name: string]: any;
    };
}
