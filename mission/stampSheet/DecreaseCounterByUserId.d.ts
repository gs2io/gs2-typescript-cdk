import { ConsumeAction } from "../../core/model";
export default class DecreaseCounterByUserId extends ConsumeAction {
    constructor(namespaceName: string, counterName: string, value: number, userId?: string | null);
}
