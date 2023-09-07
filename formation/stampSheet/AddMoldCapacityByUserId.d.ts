import { AcquireAction } from "../../core/model";
export default class AddMoldCapacityByUserId extends AcquireAction {
    constructor(namespaceName: string, moldModelName: string, capacity: number, userId?: string | null);
}
