import { AppleAppStoreSettingOptions } from "./options/AppleAppStoreSettingOptions";
export default class AppleAppStoreSetting {
    private readonly bundleId;
    private readonly sharedSecretKey;
    private readonly issuerId;
    private readonly keyId;
    private readonly privateKeyPem;
    constructor(options?: AppleAppStoreSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
