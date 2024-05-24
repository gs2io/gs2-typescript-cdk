import { ConsumeAction } from "../../core/model";
import { SimpleItemVerifyType } from "./enum/SimpleItemVerifyType";
export default class VerifySimpleItemByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly itemName;
    private readonly verifyType;
    private readonly count;
    private readonly multiplyValueSpecifyingQuantity;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: SimpleItemVerifyType, count: number, multiplyValueSpecifyingQuantity?: boolean | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
