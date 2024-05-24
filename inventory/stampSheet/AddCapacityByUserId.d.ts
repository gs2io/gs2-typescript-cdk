import { AcquireAction } from "../../core/model";
export default class AddCapacityByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly addCapacityValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, inventoryName: string, addCapacityValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
