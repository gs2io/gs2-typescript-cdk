import CurrentStaminaMasterRef from "./CurrentStaminaMasterRef";
import MaxStaminaTableRef from "./MaxStaminaTableRef";
import RecoverIntervalTableRef from "./RecoverIntervalTableRef";
import RecoverValueTableRef from "./RecoverValueTableRef";
import StaminaModelRef from "./StaminaModelRef";
import RecoverIntervalTableMasterRef from "./RecoverIntervalTableMasterRef";
import MaxStaminaTableMasterRef from "./MaxStaminaTableMasterRef";
import RecoverValueTableMasterRef from "./RecoverValueTableMasterRef";
import StaminaModelMasterRef from "./StaminaModelMasterRef";
export default class NamespaceRef {
    private namespaceName;
    constructor(namespaceName: string);
    currentStaminaMaster(): CurrentStaminaMasterRef;
    maxStaminaTable(maxStaminaTableName: string): MaxStaminaTableRef;
    recoverIntervalTable(recoverIntervalTableName: string): RecoverIntervalTableRef;
    recoverValueTable(recoverValueTableName: string): RecoverValueTableRef;
    staminaModel(staminaName: string): StaminaModelRef;
    recoverIntervalTableMaster(recoverIntervalTableName: string): RecoverIntervalTableMasterRef;
    maxStaminaTableMaster(maxStaminaTableName: string): MaxStaminaTableMasterRef;
    recoverValueTableMaster(recoverValueTableName: string): RecoverValueTableMasterRef;
    staminaModelMaster(staminaName: string): StaminaModelMasterRef;
    grn(): string;
}
