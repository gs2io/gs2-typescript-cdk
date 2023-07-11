import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import VersionModel from "./VersionModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly assumeUserId;
    private readonly description;
    private readonly acceptVersionScript;
    private readonly checkVersionTriggerScriptId;
    private readonly logSetting;
    constructor(stack: Stack, name: string, assumeUserId: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(versionModels: VersionModel[]): Namespace;
}
