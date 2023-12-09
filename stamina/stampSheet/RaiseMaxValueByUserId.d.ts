import { AcquireAction } from "../../core/model";
export default class RaiseMaxValueByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly raiseValue;
    constructor(namespaceName: string, staminaName: string, raiseValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
