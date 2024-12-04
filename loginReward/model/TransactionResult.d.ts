import { TransactionResultOptions } from "./options/TransactionResultOptions";
export default class TransactionResult {
    private readonly transactionId;
    private readonly verifyResults;
    private readonly consumeResults;
    private readonly acquireResults;
    constructor(transactionId: string, options?: TransactionResultOptions | null);
    properties(): {
        [name: string]: any;
    };
}
