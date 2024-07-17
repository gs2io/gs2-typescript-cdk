"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TwoFactorAuthenticationSetting {
    constructor(authenticationKey, status, options = null) {
        this.authenticationKey = authenticationKey;
        this.status = status;
    }
    properties() {
        let properties = {};
        if (this.authenticationKey != null) {
            properties["authenticationKey"] = this.authenticationKey;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }
        return properties;
    }
}
exports.default = TwoFactorAuthenticationSetting;
//# sourceMappingURL=TwoFactorAuthenticationSetting.js.map