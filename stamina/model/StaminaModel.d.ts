import { StaminaModelOptions } from "./options/StaminaModelOptions";
export default class StaminaModel {
    private readonly name;
    private readonly recoverIntervalMinutes;
    private readonly recoverValue;
    private readonly initialCapacity;
    private readonly isOverflow;
    private readonly metadata;
    private readonly maxCapacity;
    private readonly maxStaminaTable;
    private readonly recoverIntervalTable;
    private readonly recoverValueTable;
    constructor(name: string, recoverIntervalMinutes: number, recoverValue: number, initialCapacity: number, isOverflow: boolean, options?: StaminaModelOptions | null);
    properties(): {
        [name: string]: any;
    };
}
