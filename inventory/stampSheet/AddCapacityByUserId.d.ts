import { AcquireAction } from "../../core/model";
export default class AddCapacityByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, addCapacityValue: number, userId?: string | null);
}
