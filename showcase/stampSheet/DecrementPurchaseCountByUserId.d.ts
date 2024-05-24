import { AcquireAction } from "../../core/model";
export default class DecrementPurchaseCountByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly showcaseName;
    private readonly displayItemName;
    private readonly userId;
    private readonly count;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, showcaseName: string, displayItemName: string, count: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
