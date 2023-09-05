import { ConsumeAction } from "../../core/model";
export default class DecreaseMaxValueByUserId extends ConsumeAction {
    constructor(namespaceName: string, staminaName: string, decreaseValue: number, userId?: string | null);
}
