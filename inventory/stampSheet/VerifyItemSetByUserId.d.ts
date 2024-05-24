import { ConsumeAction } from "../../core/model";
import { ItemSetVerifyType } from "./enum/ItemSetVerifyType";
export default class VerifyItemSetByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly itemName;
    private readonly verifyType;
    private readonly count;
    private readonly itemSetName;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: ItemSetVerifyType, count: number, itemSetName?: string | null, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
