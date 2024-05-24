import { ConsumeAction } from "../../core/model";
export default class DecreaseMaxValueByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly decreaseValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, staminaName: string, decreaseValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
