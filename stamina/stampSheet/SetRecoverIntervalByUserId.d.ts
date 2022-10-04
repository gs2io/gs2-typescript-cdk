import { AcquireAction } from "../../core/model";
export default class SetRecoverIntervalByUserId extends AcquireAction {
    constructor(namespaceName: string, staminaName: string, recoverIntervalMinutes: number, userId?: string);
}
