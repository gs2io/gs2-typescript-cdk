import { AcquireAction } from "../../core/model";
export default class IncreaseCounterByUserId extends AcquireAction {
    constructor(namespaceName: string, counterName: string, value: number, userId?: string | null);
}
