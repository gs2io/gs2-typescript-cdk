import { ConsumeAction } from "../../core/model";
export default class DecreaseMaxValueByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly decreaseValue;
    constructor(namespaceName: string, staminaName: string, decreaseValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
