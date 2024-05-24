import { AcquireAction } from "../../core/model";
export default class SetMaxValueByUserId extends AcquireAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly maxValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, staminaName: string, maxValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
