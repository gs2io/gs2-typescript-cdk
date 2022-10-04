import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import TransactionSetting from "../../core/model/TransactionSetting";
import ScriptSetting from "../../core/model/ScriptSetting";
import LogSetting from "../../core/model/LogSetting";
import Showcase from "./Showcase";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    buyScript?: ScriptSetting | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly transactionSetting;
    private readonly buyScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, transactionSetting: TransactionSetting, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(showcases: Showcase[]): Namespace;
}
