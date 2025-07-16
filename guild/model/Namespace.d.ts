import { CdkResource, Stack } from "../../core/model";
import { GetAttr } from "../../core/func";
import NamespaceRef from "../ref/NamespaceRef";
import GuildModel from "./GuildModel";
import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace extends CdkResource {
    private readonly stack;
    private readonly name;
    private readonly description;
    private readonly changeNotification;
    private readonly joinNotification;
    private readonly leaveNotification;
    private readonly changeMemberNotification;
    private readonly receiveRequestNotification;
    private readonly removeRequestNotification;
    private readonly createGuildScript;
    private readonly updateGuildScript;
    private readonly joinGuildScript;
    private readonly receiveJoinRequestScript;
    private readonly leaveGuildScript;
    private readonly changeRoleScript;
    private readonly deleteGuildScript;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions | null);
    alternateKeys(): string;
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(guildModels: GuildModel[]): Namespace;
}
