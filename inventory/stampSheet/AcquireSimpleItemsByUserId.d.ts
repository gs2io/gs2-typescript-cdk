import { AcquireAction } from "../../core/model";
import AcquireCount from "../model/AcquireCount";
export default class AcquireSimpleItemsByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly acquireCounts;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, acquireCounts: AcquireCount[], timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
