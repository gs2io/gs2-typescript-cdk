import RecoverStaminaByUserId from "../stampSheet/RecoverStaminaByUserId";
import RaiseMaxValueByUserId from "../stampSheet/RaiseMaxValueByUserId";
import SetMaxValueByUserId from "../stampSheet/SetMaxValueByUserId";
import SetRecoverIntervalByUserId from "../stampSheet/SetRecoverIntervalByUserId";
import SetRecoverValueByUserId from "../stampSheet/SetRecoverValueByUserId";
import DecreaseMaxValueByUserId from "../stampSheet/DecreaseMaxValueByUserId";
import ConsumeStaminaByUserId from "../stampSheet/ConsumeStaminaByUserId";
export default class StaminaModelRef {
    private readonly namespaceName;
    private readonly staminaName;
    constructor(namespaceName: string, staminaName: string);
    recoverStamina(recoverValue: number, userId?: string | null): RecoverStaminaByUserId;
    raiseMaxValue(raiseValue: number, userId?: string | null): RaiseMaxValueByUserId;
    setMaxValue(maxValue: number, userId?: string | null): SetMaxValueByUserId;
    setRecoverInterval(recoverIntervalMinutes: number, userId?: string | null): SetRecoverIntervalByUserId;
    setRecoverValue(recoverValue: number, userId?: string | null): SetRecoverValueByUserId;
    decreaseMaxValue(decreaseValue: number, userId?: string | null): DecreaseMaxValueByUserId;
    consumeStamina(consumeValue: number, userId?: string | null): ConsumeStaminaByUserId;
    grn(): string;
}
