import { NamespaceOptions } from "./options/NamespaceOptions";
export default class Namespace {
    private readonly ownerId;
    private readonly name;
    private readonly enableAutoRun;
    private readonly description;
    private readonly runNotification;
    private readonly pushNotification;
    private readonly logSetting;
    private readonly revision;
    constructor(ownerId: string, name: string, enableAutoRun: boolean, options?: NamespaceOptions | null);
    properties(): {
        [name: string]: any;
    };
}
