import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import MaxStaminaTableMasterRef from "../ref/MaxStaminaTableMasterRef";
export interface MaxStaminaTableMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class MaxStaminaTableMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly experienceModelId;
    private readonly values;
    constructor(stack: Stack, namespaceName: string, name: string, experienceModelId: string, values: number[], options?: MaxStaminaTableMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): MaxStaminaTableMasterRef;
    getAttrMaxStaminaTableId(): GetAttr;
}
