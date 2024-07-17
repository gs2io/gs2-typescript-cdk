import TwoFactorAuthenticationSetting from "../TwoFactorAuthenticationSetting";
export interface PasswordEnableTwoFactorAuthenticationIsDisableOptions {
    twoFactorAuthenticationSetting?: TwoFactorAuthenticationSetting | null;
    revision?: number | null;
}
