import { WalletSummaryOptions } from "./options/WalletSummaryOptions";
export default class WalletSummary {
    private readonly paid;
    private readonly free;
    private readonly total;
    constructor(paid: number, free: number, total: number, options?: WalletSummaryOptions | null);
    properties(): {
        [name: string]: any;
    };
}
