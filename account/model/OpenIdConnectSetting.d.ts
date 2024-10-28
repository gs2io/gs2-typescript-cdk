import { OpenIdConnectSettingOptions } from "./options/OpenIdConnectSettingOptions";
export default class OpenIdConnectSetting {
    private readonly configurationPath;
    private readonly clientId;
    private readonly clientSecret;
    private readonly appleTeamId;
    private readonly appleKeyId;
    private readonly applePrivateKeyPem;
    private readonly doneEndpointUrl;
    constructor(configurationPath: string, clientId: string, options?: OpenIdConnectSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
