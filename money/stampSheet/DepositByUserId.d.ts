import { AcquireAction } from "../../core/model";
export default class DepositByUserId extends AcquireAction {
    constructor(namespaceName: string, slot: number, price: number, count: number, userId?: string | null);
}
