import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import TransactionSetting from "../../core/model/TransactionSetting";
import ScriptSetting from "../../core/model/ScriptSetting";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";
import GlobalMessage from "./GlobalMessage";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    isAutomaticDeletingEnabled?: boolean | null | undefined;
    transactionSetting?: TransactionSetting | null | undefined;
    receiveMessageScript?: ScriptSetting | null | undefined;
    readMessageScript?: ScriptSetting | null | undefined;
    deleteMessageScript?: ScriptSetting | null | undefined;
    receiveNotification?: NotificationSetting | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly isAutomaticDeletingEnabled;
    private readonly transactionSetting;
    private readonly receiveMessageScript;
    private readonly readMessageScript;
    private readonly deleteMessageScript;
    private readonly receiveNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(globalMessages: GlobalMessage[]): Namespace;
}
