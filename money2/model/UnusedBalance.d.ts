import { UnusedBalanceOptions } from "./options/UnusedBalanceOptions";
export default class UnusedBalance {
    private readonly currency;
    private readonly balance;
    private readonly revision;
    constructor(currency: string, balance: number, options?: UnusedBalanceOptions | null);
    properties(): {
        [name: string]: any;
    };
}
