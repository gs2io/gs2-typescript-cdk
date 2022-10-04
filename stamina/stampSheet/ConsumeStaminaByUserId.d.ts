import { ConsumeAction } from "../../core/model";
export default class ConsumeStaminaByUserId extends ConsumeAction {
    constructor(namespaceName: string, staminaName: string, consumeValue: number, userId?: string);
}
