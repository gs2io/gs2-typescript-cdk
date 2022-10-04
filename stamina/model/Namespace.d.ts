import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import ScriptSetting from "../../core/model/ScriptSetting";
import LogSetting from "../../core/model/LogSetting";
import StaminaModel from "./StaminaModel";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    overflowTriggerScript?: ScriptSetting | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly overflowTriggerScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(staminaModels: StaminaModel[]): Namespace;
}
