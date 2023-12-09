import { AcquireAction } from "../../core/model";
export default class RecoverStaminaByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly recoverValue;
    constructor(namespaceName: string, staminaName: string, recoverValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
