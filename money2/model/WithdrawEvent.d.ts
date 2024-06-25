import WalletSummary from "./WalletSummary";
import { WithdrawEventOptions } from "./options/WithdrawEventOptions";
export default class WithdrawEvent {
    private readonly slot;
    private readonly status;
    private readonly withdrawDetails;
    constructor(slot: number, status: WalletSummary, options?: WithdrawEventOptions | null);
    properties(): {
        [name: string]: any;
    };
}
