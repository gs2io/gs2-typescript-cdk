import { ConsumeAction } from "../../core/model";
export default class ConsumeStaminaByUserId extends ConsumeAction {
    private readonly namespaceName;
    private readonly staminaName;
    private readonly userId;
    private readonly consumeValue;
    private readonly timeOffsetToken;
    constructor(namespaceName: string, staminaName: string, consumeValue: number, timeOffsetToken?: string | null, userId?: string);
    request(): {
        [name: string]: any;
    };
    action(): string;
}
