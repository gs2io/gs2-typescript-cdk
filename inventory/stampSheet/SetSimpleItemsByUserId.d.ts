import { AcquireAction } from "../../core/model";
import HeldCount from "../model/HeldCount";
export default class SetSimpleItemsByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, counts: HeldCount[], userId?: string | null);
}
