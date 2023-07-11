import { ConsumeCountOptions } from "./options/ConsumeCountOptions";
export default class ConsumeCount {
    private readonly itemName;
    private readonly count;
    constructor(itemName: string, count: number, options?: ConsumeCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
