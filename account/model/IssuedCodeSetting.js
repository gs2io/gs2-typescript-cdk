"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IssuedCodeSetting {
    constructor(expiresDays, deleteOnUse, options = null) {
        var _a;
        this.maxFailedAttempts = null;
        this.expiresDays = expiresDays;
        this.deleteOnUse = deleteOnUse;
        this.maxFailedAttempts = (_a = options === null || options === void 0 ? void 0 : options.maxFailedAttempts) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.expiresDays != null) {
            properties["expiresDays"] = this.expiresDays;
        }
        if (this.maxFailedAttempts != null) {
            properties["maxFailedAttempts"] = this.maxFailedAttempts;
        }
        if (this.deleteOnUse != null) {
            properties["deleteOnUse"] = this.deleteOnUse;
        }
        return properties;
    }
}
exports.default = IssuedCodeSetting;
//# sourceMappingURL=IssuedCodeSetting.js.map