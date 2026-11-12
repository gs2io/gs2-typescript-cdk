import { AccountDeletionSettingOptions } from "./options/AccountDeletionSettingOptions";
import { AccountDeletionSettingLoginDuringGracePeriod } from "./enums/AccountDeletionSettingLoginDuringGracePeriod";
import { AccountDeletionSettingCleanUserDataScope } from "./enums/AccountDeletionSettingCleanUserDataScope";
export default class AccountDeletionSetting {
    private readonly gracePeriodMinutes;
    private readonly loginDuringGracePeriod;
    private readonly cleanUserDataScope;
    constructor(gracePeriodMinutes: number, loginDuringGracePeriod: AccountDeletionSettingLoginDuringGracePeriod, cleanUserDataScope: AccountDeletionSettingCleanUserDataScope, options?: AccountDeletionSettingOptions | null);
    properties(): {
        [name: string]: any;
    };
}
