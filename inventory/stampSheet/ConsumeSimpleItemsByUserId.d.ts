import { ConsumeAction } from "../../core/model";
import ConsumeCount from "../model/ConsumeCount";
export default class ConsumeSimpleItemsByUserId extends ConsumeAction {
    constructor(namespaceName: string, inventoryName: string, consumeCounts: ConsumeCount[], userId?: string | null);
}
