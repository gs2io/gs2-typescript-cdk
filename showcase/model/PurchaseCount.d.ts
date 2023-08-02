import { PurchaseCountOptions } from "./options/PurchaseCountOptions";
export default class PurchaseCount {
    private readonly name;
    private readonly count;
    constructor(name: string, count: number, options?: PurchaseCountOptions | null);
    properties(): {
        [name: string]: any;
    };
}
