import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import ScriptRef from "../ref/ScriptRef";
import { ScriptOptions } from "./options/ScriptOptions";
export default class Script extends CdkResource {
    private readonly stack;
    private readonly namespaceName;
    private readonly name;
    private readonly script;
    private readonly description;
    private readonly disableStringNumberToNumber;
    constructor(stack: Stack, namespaceName: string, name: string, script: string, options?: ScriptOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): ScriptRef;
    getAttrScriptId(): GetAttr;
}
