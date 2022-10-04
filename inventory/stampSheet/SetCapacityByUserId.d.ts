import { AcquireAction } from "../../core/model";
export default class SetCapacityByUserId extends AcquireAction {
    constructor(namespaceName: string, inventoryName: string, newCapacityValue: number, userId?: string);
}
