import MaxStaminaTable from "../model/MaxStaminaTable";
import RecoverIntervalTable from "../model/RecoverIntervalTable";
import RecoverValueTable from "../model/RecoverValueTable";
import StaminaModelRef from "../ref/StaminaModelRef";
export interface StaminaModelOptions {
    metadata?: string | null | undefined;
    maxCapacity?: number | null | undefined;
    maxStaminaTable?: MaxStaminaTable | null | undefined;
    recoverIntervalTable?: RecoverIntervalTable | null | undefined;
    recoverValueTable?: RecoverValueTable | null | undefined;
}
export default class StaminaModel {
    private readonly name;
    private readonly metadata;
    private readonly recoverIntervalMinutes;
    private readonly recoverValue;
    private readonly initialCapacity;
    private readonly isOverflow;
    private readonly maxCapacity;
    private readonly maxStaminaTable;
    private readonly recoverIntervalTable;
    private readonly recoverValueTable;
    constructor(name: string, recoverIntervalMinutes: number, recoverValue: number, initialCapacity: number, isOverflow: boolean, options?: StaminaModelOptions);
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): StaminaModelRef;
}
