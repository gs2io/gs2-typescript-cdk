import core from "../../core";
import { GetAttr } from "../../core/func";
import { Stack } from "../../core/model";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";
import DistributorModel from "./DistributorModel";
import NamespaceRef from "../ref/NamespaceRef";
export interface NamespaceOptions {
    description?: string | null | undefined;
    assumeUserId?: string | null | undefined;
    autoRunStampSheetNotification?: NotificationSetting | null | undefined;
    logSetting?: LogSetting | null | undefined;
}
export default class Namespace extends core.CdkResource {
    private stack;
    private readonly name;
    private readonly description;
    private readonly assumeUserId;
    private readonly autoRunStampSheetNotification;
    private readonly logSetting;
    constructor(stack: Stack, name: string, options?: NamespaceOptions);
    resourceType(): string;
    properties(): {
        [name: string]: any;
    };
    ref(): NamespaceRef;
    getAttrNamespaceId(): GetAttr;
    masterData(distributorModels: DistributorModel[]): Namespace;
}
