import { AcquireAction } from "../../core/model";
export default class AcquireItemSetByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly itemName;
    private readonly userId;
    private readonly acquireCount;
    private readonly expiresAt;
    private readonly createNewItemSet;
    private readonly itemSetName;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, itemName: string, acquireCount: number, expiresAt?: number | null, createNewItemSet?: boolean | null, itemSetName?: string | null, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
