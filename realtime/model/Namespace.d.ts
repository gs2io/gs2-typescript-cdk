import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import { NamespaceServerType } from "./enum/NamespaceServerType";
import { NamespaceServerSpec } from "./enum/NamespaceServerSpec";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly serverType;
    private readonly serverSpec;
    private readonly description;
    private readonly createNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, serverType: NamespaceServerType, serverSpec: NamespaceServerSpec, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
