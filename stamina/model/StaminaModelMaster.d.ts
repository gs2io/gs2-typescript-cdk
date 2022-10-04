import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import StaminaModelMasterRef from "../ref/StaminaModelMasterRef";
export interface StaminaModelMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
    maxCapacity?: number | null | undefined;
    maxStaminaTableName?: string | null | undefined;
    recoverIntervalTableName?: string | null | undefined;
    recoverValueTableName?: string | null | undefined;
}
export default class StaminaModelMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly recoverIntervalMinutes;
    private readonly recoverValue;
    private readonly initialCapacity;
    private readonly isOverflow;
    private readonly maxCapacity;
    private readonly maxStaminaTableName;
    private readonly recoverIntervalTableName;
    private readonly recoverValueTableName;
    constructor(stack: Stack, namespaceName: string, name: string, recoverIntervalMinutes: number, recoverValue: number, initialCapacity: number, isOverflow: boolean, options?: StaminaModelMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): StaminaModelMasterRef;
    getAttrStaminaModelId(): GetAttr;
}
