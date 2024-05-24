import { AcquireAction } from "../../core/model";
import HeldCount from "../model/HeldCount";
export default class SetSimpleItemsByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly counts;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, counts: HeldCount[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
