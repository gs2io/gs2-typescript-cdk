import { ConsumeAction } from "../../core/model";
import { ReferenceOfVerifyType } from "./enum/ReferenceOfVerifyType";
export default class VerifyReferenceOfByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly referenceOf;
    private readonly verifyType;
    private readonly itemSetName;
    constructor(namespaceName: string, inventoryName: string, itemName: string, referenceOf: string, verifyType: ReferenceOfVerifyType, itemSetName?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
