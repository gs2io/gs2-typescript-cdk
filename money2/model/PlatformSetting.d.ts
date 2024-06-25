import { PlatformSettingOptions } from "./options/PlatformSettingOptions";
export default class PlatformSetting {
    private readonly appleAppStore;
    private readonly googlePlay;
    private readonly fake;
    constructor(options?: PlatformSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
