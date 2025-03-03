"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GooglePlaySetting {
    constructor(options = null) {
        var _a, _b, _c;
        this.packageName = null;
        this.publicKey = null;
        this.credentialsJSON = null;
        this.packageName = (_a = options === null || options === void 0 ? void 0 : options.packageName) !== null && _a !== void 0 ? _a : null;
        this.publicKey = (_b = options === null || options === void 0 ? void 0 : options.publicKey) !== null && _b !== void 0 ? _b : null;
        this.credentialsJSON = (_c = options === null || options === void 0 ? void 0 : options.credentialsJSON) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.packageName != null) {
            properties["packageName"] = this.packageName;
        }
        if (this.publicKey != null) {
            properties["publicKey"] = this.publicKey;
        }
        if (this.credentialsJSON != null) {
            properties["credentialsJSON"] = this.credentialsJSON;
        }
        return properties;
    }
}
exports.default = GooglePlaySetting;
//# sourceMappingURL=GooglePlaySetting.js.map