import { AcquireAction } from "../../core/model";
export default class DepositByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly slot;
    private readonly price;
    private readonly count;
    constructor(namespaceName: string, slot: number, price: number, count: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
