import { WalletDetailOptions } from "./options/WalletDetailOptions";
export default class WalletDetail {
    private readonly price;
    private readonly count;
    constructor(price: number, count: number, options?: WalletDetailOptions | null);
    properties(): {
        [name: string]: any;
    };
}
