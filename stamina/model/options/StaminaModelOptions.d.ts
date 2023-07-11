import MaxStaminaTable from "../MaxStaminaTable";
import RecoverIntervalTable from "../RecoverIntervalTable";
import RecoverValueTable from "../RecoverValueTable";
export interface StaminaModelOptions {
    metadata?: string | null;
    maxCapacity?: number | null;
    maxStaminaTable?: MaxStaminaTable | null;
    recoverIntervalTable?: RecoverIntervalTable | null;
    recoverValueTable?: RecoverValueTable | null;
}
