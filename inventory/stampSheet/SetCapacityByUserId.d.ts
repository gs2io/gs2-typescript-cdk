import { AcquireAction } from "../../core/model";
export default class SetCapacityByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly inventoryName;
    private readonly userId;
    private readonly newCapacityValue;
    constructor(namespaceName: string, inventoryName: string, newCapacityValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
