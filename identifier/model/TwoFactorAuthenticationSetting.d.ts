import { TwoFactorAuthenticationSettingOptions } from "./options/TwoFactorAuthenticationSettingOptions";
import { TwoFactorAuthenticationSettingStatus } from "./enums/TwoFactorAuthenticationSettingStatus";
export default class TwoFactorAuthenticationSetting {
    private readonly authenticationKey;
    private readonly status;
    constructor(authenticationKey: string, status: TwoFactorAuthenticationSettingStatus, options?: TwoFactorAuthenticationSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
