import MaxStaminaTableRef from "./MaxStaminaTableRef";
import RecoverIntervalTableRef from "./RecoverIntervalTableRef";
import RecoverValueTableRef from "./RecoverValueTableRef";
import StaminaModelRef from "./StaminaModelRef";
import RecoverStaminaByUserId from "../stampSheet/RecoverStaminaByUserId";
import RaiseMaxValueByUserId from "../stampSheet/RaiseMaxValueByUserId";
import SetMaxValueByUserId from "../stampSheet/SetMaxValueByUserId";
import SetRecoverIntervalByUserId from "../stampSheet/SetRecoverIntervalByUserId";
import SetRecoverValueByUserId from "../stampSheet/SetRecoverValueByUserId";
import ConsumeStaminaByUserId from "../stampSheet/ConsumeStaminaByUserId";
export default class NamespaceRef {
    private readonly namespaceName;
    constructor(namespaceName: string);
    maxStaminaTable(maxStaminaTableName: string): MaxStaminaTableRef;
    recoverIntervalTable(recoverIntervalTableName: string): RecoverIntervalTableRef;
    recoverValueTable(recoverValueTableName: string): RecoverValueTableRef;
    staminaModel(staminaName: string): StaminaModelRef;
    recoverStamina(staminaName: string, recoverValue: number, userId?: string | null): RecoverStaminaByUserId;
    raiseMaxValue(staminaName: string, raiseValue: number, userId?: string | null): RaiseMaxValueByUserId;
    setMaxValue(staminaName: string, maxValue: number, userId?: string | null): SetMaxValueByUserId;
    setRecoverInterval(staminaName: string, recoverIntervalMinutes: number, userId?: string | null): SetRecoverIntervalByUserId;
    setRecoverValue(staminaName: string, recoverValue: number, userId?: string | null): SetRecoverValueByUserId;
    consumeStamina(staminaName: string, consumeValue: number, userId?: string | null): ConsumeStaminaByUserId;
    grn(): string;
}
