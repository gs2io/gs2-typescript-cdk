import { GooglePlaySettingOptions } from "./options/GooglePlaySettingOptions";
export default class GooglePlaySetting {
    private readonly packageName;
    private readonly publicKey;
    constructor(options?: GooglePlaySettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
