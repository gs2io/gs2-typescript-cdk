import { AcquireAction } from "../../core/model";
export default class SetMaxValueByUserId extends AcquireAction {
    constructor(namespaceName: string, staminaName: string, maxValue: number, userId?: string | null);
}
