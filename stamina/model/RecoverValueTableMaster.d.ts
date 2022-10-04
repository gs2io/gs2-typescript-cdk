import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import RecoverValueTableMasterRef from "../ref/RecoverValueTableMasterRef";
export interface RecoverValueTableMasterOptions {
    description?: string | null | undefined;
    metadata?: string | null | undefined;
}
export default class RecoverValueTableMaster extends core.CdkResource {
    private stack;
    private readonly namespaceName;
    private readonly name;
    private readonly description;
    private readonly metadata;
    private readonly experienceModelId;
    private readonly values;
    constructor(stack: Stack, namespaceName: string, name: string, experienceModelId: string, values: number[], options?: RecoverValueTableMasterOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(namespaceName: string): RecoverValueTableMasterRef;
    getAttrRecoverValueTableId(): GetAttr;
}
