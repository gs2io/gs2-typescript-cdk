import { TransactionOptions } from "./options/TransactionOptions";
export default class Transaction {
    private readonly consumeActions;
    private readonly acquireActions;
    constructor(options?: TransactionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
