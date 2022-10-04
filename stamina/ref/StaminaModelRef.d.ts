import RecoverStaminaByUserId from "../stampSheet/RecoverStaminaByUserId";
import RaiseMaxValueByUserId from "../stampSheet/RaiseMaxValueByUserId";
import SetMaxValueByUserId from "../stampSheet/SetMaxValueByUserId";
import SetRecoverIntervalByUserId from "../stampSheet/SetRecoverIntervalByUserId";
import SetRecoverValueByUserId from "../stampSheet/SetRecoverValueByUserId";
import ConsumeStaminaByUserId from "../stampSheet/ConsumeStaminaByUserId";
export default class StaminaModelRef {
    private namespaceName;
    private staminaName;
    constructor(namespaceName: string, staminaName: string);
    recoverStamina(recoverValue: number, userId?: string): RecoverStaminaByUserId;
    raiseMaxValue(raiseValue: number, userId?: string): RaiseMaxValueByUserId;
    setMaxValue(maxValue: number, userId?: string): SetMaxValueByUserId;
    setRecoverInterval(recoverIntervalMinutes: number, userId?: string): SetRecoverIntervalByUserId;
    setRecoverValue(recoverValue: number, userId?: string): SetRecoverValueByUserId;
    consumeStamina(consumeValue: number, userId?: string): ConsumeStaminaByUserId;
    grn(): string;
}
