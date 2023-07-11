import { AcquireAction } from "../../core/model";
export default class SetMoldCapacityByUserId extends AcquireAction {
    constructor(namespaceName: string, moldName: string, capacity: number, userId?: string | null);
}
