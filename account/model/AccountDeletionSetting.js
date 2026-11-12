"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountDeletionSetting {
    constructor(gracePeriodMinutes, loginDuringGracePeriod, cleanUserDataScope, options = null) {
        this.gracePeriodMinutes = gracePeriodMinutes;
        this.loginDuringGracePeriod = loginDuringGracePeriod;
        this.cleanUserDataScope = cleanUserDataScope;
    }
    properties() {
        let properties = {};
        if (this.gracePeriodMinutes != null) {
            properties["gracePeriodMinutes"] = this.gracePeriodMinutes;
        }
        if (this.loginDuringGracePeriod != null) {
            properties["loginDuringGracePeriod"] = this.loginDuringGracePeriod;
        }
        if (this.cleanUserDataScope != null) {
            properties["cleanUserDataScope"] = this.cleanUserDataScope;
        }
        return properties;
    }
}
exports.default = AccountDeletionSetting;
//# sourceMappingURL=AccountDeletionSetting.js.map