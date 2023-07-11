import { AcquireAction } from "../../core/model";
export default class RecoverStaminaByUserId extends AcquireAction {
    constructor(namespaceName: string, staminaName: string, recoverValue: number, userId?: string | null);
}
