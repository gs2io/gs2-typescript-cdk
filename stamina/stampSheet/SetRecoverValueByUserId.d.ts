import { AcquireAction } from "../../core/model";
export default class SetRecoverValueByUserId extends AcquireAction {
    constructor(namespaceName: string, staminaName: string, recoverValue: number, userId?: string);
}
