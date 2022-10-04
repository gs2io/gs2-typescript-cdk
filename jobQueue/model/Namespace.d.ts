import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    pushNotification?: NotificationSetting | null | undefined;
    runNotification?: NotificationSetting | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly enableAutoRun;
    private readonly pushNotification;
    private readonly runNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, enableAutoRun: boolean, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
}
