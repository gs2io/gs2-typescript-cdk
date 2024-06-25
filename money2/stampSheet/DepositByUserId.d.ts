import { AcquireAction } from "../../core/model";
import DepositTransaction from "../model/DepositTransaction";
export default class DepositByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly slot;
    private readonly depositTransactions;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, slot: number, depositTransactions: DepositTransaction[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
