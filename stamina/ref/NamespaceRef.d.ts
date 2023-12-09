import StaminaModelRef from "./StaminaModelRef";
import RecoverStaminaByUserId from "../stampSheet/RecoverStaminaByUserId";
import RaiseMaxValueByUserId from "../stampSheet/RaiseMaxValueByUserId";
import SetMaxValueByUserId from "../stampSheet/SetMaxValueByUserId";
import SetRecoverIntervalByUserId from "../stampSheet/SetRecoverIntervalByUserId";
import SetRecoverValueByUserId from "../stampSheet/SetRecoverValueByUserId";
import DecreaseMaxValueByUserId from "../stampSheet/DecreaseMaxValueByUserId";
import ConsumeStaminaByUserId from "../stampSheet/ConsumeStaminaByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    staminaModel(staminaName: string): StaminaModelRef;
    recoverStamina(staminaName: string, recoverValue: number, userId?: string): RecoverStaminaByUserId;
    raiseMaxValue(staminaName: string, raiseValue: number, userId?: string): RaiseMaxValueByUserId;
    setMaxValue(staminaName: string, maxValue: number, userId?: string): SetMaxValueByUserId;
    setRecoverInterval(staminaName: string, recoverIntervalMinutes: number, userId?: string): SetRecoverIntervalByUserId;
    setRecoverValue(staminaName: string, recoverValue: number, userId?: string): SetRecoverValueByUserId;
    decreaseMaxValue(staminaName: string, decreaseValue: number, userId?: string): DecreaseMaxValueByUserId;
    consumeStamina(staminaName: string, consumeValue: number, userId?: string): ConsumeStaminaByUserId;
    grn(): string;
}
