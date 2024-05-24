import { ConsumeAction } from "../../core/model";
export default class ConsumeBigItemByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly consumeCount;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, consumeCount: string, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
