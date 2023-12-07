import { HeldCountOptions } from "./options/HeldCountOptions";
export default class HeldCount {
    private readonly itemName;
    private readonly count;
    constructor(itemName: string, count: number, options?: HeldCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
