import { ConsumeAction } from "../../core/model";
export default class ConsumeBigItemByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly itemName;
    private readonly consumeCount;
    constructor(namespaceName: string, inventoryName: string, itemName: string, consumeCount: string, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
