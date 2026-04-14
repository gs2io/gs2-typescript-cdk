import { NumericRangeOptions } from "./options/NumericRangeOptions";
export default class NumericRange {
    private readonly min;
    private readonly max;
    constructor(min: number, max: number, options?: NumericRangeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
