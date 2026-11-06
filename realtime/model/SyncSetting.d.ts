import { SyncSettingOptions } from "./options/SyncSettingOptions";
export default class SyncSetting {
    private readonly objectCatalog;
    constructor(options?: SyncSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
