import { DepositTransactionOptions } from "./options/DepositTransactionOptions";
export default class DepositTransaction {
    private readonly price;
    private readonly count;
    private readonly currency;
    private readonly depositedAt;
    constructor(price: number, count: number, options?: DepositTransactionOptions | null);
    properties(): {
        [name: string]: any;
    };
}
