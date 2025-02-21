import { ReceiptOptions } from "./options/ReceiptOptions";
import { ReceiptStore } from "./enums/ReceiptStore";
export default class Receipt {
    private readonly store;
    private readonly transactionID;
    private readonly payload;
    constructor(store: ReceiptStore, transactionID: string, payload: string, options?: ReceiptOptions | null);
    properties(): {
        [name: string]: any;
    };
}
