import { AttributeRangeOptions } from "./options/AttributeRangeOptions";
export default class AttributeRange {
    private readonly name;
    private readonly min;
    private readonly max;
    constructor(name: string, min: number, max: number, options?: AttributeRangeOptions | null);
    properties(): {
        [name: string]: any;
    };
}
