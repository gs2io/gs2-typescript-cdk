import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import ScriptNamespace from "../../script/model/Namespace";
import NamespaceRef from "../ref/NamespaceRef";
import { NamespaceOptions } from "./options/NamespaceOptions";
import StateMachineDefinition from "../integration/StateMachineDefinition";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly startScript;
    private readonly passScript;
    private readonly errorScript;
    private readonly lowestStateMachineVersion;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    stateMachine(scriptNamespace: ScriptNamespace, definition: StateMachineDefinition): void;
}
