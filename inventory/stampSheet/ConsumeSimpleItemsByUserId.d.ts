import { ConsumeAction } from "../../core/model";
import ConsumeCount from "../model/ConsumeCount";
export default class ConsumeSimpleItemsByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly consumeCounts;
    constructor(namespaceName: string, inventoryName: string, consumeCounts: ConsumeCount[], userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
