import { AcquireAction } from "../../core/model";
export default class RaiseMaxValueByUserId extends AcquireAction {
    constructor(namespaceName: string, staminaName: string, raiseValue: number, userId?: string);
}
