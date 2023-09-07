import { ConsumeAction } from "../../core/model";
export default class SubMoldCapacityByUserId extends ConsumeAction {
    constructor(namespaceName: string, moldModelName: string, capacity: number, userId?: string | null);
}
