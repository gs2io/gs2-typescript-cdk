import { AcquireAction } from "../../core/model";
export default class SetRecoverIntervalByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly recoverIntervalMinutes;
    constructor(namespaceName: string, staminaName: string, recoverIntervalMinutes: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
