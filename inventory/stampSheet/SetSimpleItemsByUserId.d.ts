import { AcquireAction } from "../../core/model";
import HeldCount from "../model/HeldCount";
export default class SetSimpleItemsByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly counts;
    constructor(namespaceName: string, inventoryName: string, counts: HeldCount[], userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
