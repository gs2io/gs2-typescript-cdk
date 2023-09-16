import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NotificationSetting from "../../core/model/NotificationSetting";
import NamespaceRef from "../ref/NamespaceRef";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly changePointNotification;
    private readonly admob;
    private readonly unityAd;
    private readonly description;
    private readonly logSetting;
    constructor(stack: Stack, name: string, changePointNotification: NotificationSetting, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
