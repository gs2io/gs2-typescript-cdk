import { AcquireCountOptions } from "./options/AcquireCountOptions";
export default class AcquireCount {
    private readonly itemName;
    private readonly count;
    constructor(itemName: string, count: number, options?: AcquireCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
