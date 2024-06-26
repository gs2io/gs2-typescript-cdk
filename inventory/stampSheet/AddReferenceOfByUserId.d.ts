import { AcquireAction } from "../../core/model";
export default class AddReferenceOfByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly referenceOf;
    private readonly itemSetName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, referenceOf: string, itemSetName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
