import { AcquireAction } from "../../core/model";
import AcquireCount from "../model/AcquireCount";
export default class AcquireSimpleItemsByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, acquireCounts: AcquireCount[], userId?: string | null);
}
