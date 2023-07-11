import { ConsumeAction } from "../../core/model";
export default class WithdrawByUserId extends ConsumeAction {
    constructor(namespaceName: string, slot: number, count: number, paidOnly?: boolean | null, userId?: string | null);
}
