import { VerifyAction } from "../../core/model";
import { ReferenceOfVerifyType } from "./enums/ReferenceOfVerifyType";
export default class VerifyReferenceOfByUserId extends VerifyAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly referenceOf;
    private readonly verifyType;
    private readonly itemSetName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, referenceOf: string, verifyType: ReferenceOfVerifyType, itemSetName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
