import { ConsumeAction } from "../../core/model";
import { BigItemVerifyType } from "./enum/BigItemVerifyType";
export default class VerifyBigItemByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly itemName;
    private readonly verifyType;
    private readonly count;
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: BigItemVerifyType, count: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
