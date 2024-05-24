import { AcquireAction } from "../../core/model";
export default class RaiseMaxValueByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly raiseValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, staminaName: string, raiseValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
