import { ConsumeAction } from "../../core/model";
export default class WithdrawByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly slot;
    private readonly count;
    private readonly paidOnly;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, slot: number, count: number, paidOnly?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
