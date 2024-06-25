import { AppleAppStoreSettingOptions } from "./options/AppleAppStoreSettingOptions";
export default class AppleAppStoreSetting {
    private readonly bundleId;
    constructor(options?: AppleAppStoreSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
