import { FacetValueCountOptions } from "./options/FacetValueCountOptions";
export default class FacetValueCount {
    private readonly value;
    private readonly count;
    constructor(value: string, count: number, options?: FacetValueCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
