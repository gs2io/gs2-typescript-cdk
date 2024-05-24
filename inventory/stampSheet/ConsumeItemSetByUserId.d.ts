import { ConsumeAction } from "../../core/model";
export default class ConsumeItemSetByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly consumeCount;
    private readonly itemSetName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, consumeCount: number, itemSetName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
