import { VerifyAction } from "../../core/model";
import { BigItemVerifyType } from "./enum/BigItemVerifyType";
export default class VerifyBigItemByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly itemName;
    private readonly verifyType;
    private readonly count;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: BigItemVerifyType, count: string, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
