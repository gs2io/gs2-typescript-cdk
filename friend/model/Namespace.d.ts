import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly followScript;
    private readonly unfollowScript;
    private readonly sendRequestScript;
    private readonly cancelRequestScript;
    private readonly acceptRequestScript;
    private readonly rejectRequestScript;
    private readonly deleteFriendScript;
    private readonly updateProfileScript;
    private readonly followNotification;
    private readonly receiveRequestNotification;
    private readonly cancelRequestNotification;
    private readonly acceptRequestNotification;
    private readonly rejectRequestNotification;
    private readonly deleteFriendNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
