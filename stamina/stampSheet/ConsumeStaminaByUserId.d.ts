import { ConsumeAction } from "../../core/model";
export default class ConsumeStaminaByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly consumeValue;
    constructor(namespaceName: string, staminaName: string, consumeValue: number, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
