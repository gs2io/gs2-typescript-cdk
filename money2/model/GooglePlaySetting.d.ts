import { GooglePlaySettingOptions } from "./options/GooglePlaySettingOptions";
export default class GooglePlaySetting {
    private readonly packageName;
    private readonly publicKey;
    private readonly credentialsJSON;
    constructor(options?: GooglePlaySettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
