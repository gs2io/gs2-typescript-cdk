import WalletSummary from "./WalletSummary";
import { DepositEventOptions } from "./options/DepositEventOptions";
export default class DepositEvent {
    private readonly slot;
    private readonly status;
    private readonly depositTransactions;
    constructor(slot: number, status: WalletSummary, options?: DepositEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
