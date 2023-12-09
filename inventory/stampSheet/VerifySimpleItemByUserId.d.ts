import { ConsumeAction } from "../../core/model";
import { SimpleItemVerifyType } from "./enum/SimpleItemVerifyType";
export default class VerifySimpleItemByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly userId;
    private readonly inventoryName;
    private readonly itemName;
    private readonly verifyType;
    private readonly count;
    constructor(namespaceName: string, inventoryName: string, itemName: string, verifyType: SimpleItemVerifyType, count: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
