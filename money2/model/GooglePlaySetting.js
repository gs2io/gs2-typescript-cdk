"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GooglePlaySetting {
    constructor(options = null) {
        var _a, _b;
        this.packageName = null;
        this.publicKey = null;
        this.packageName = (_a = options === null || options === void 0 ? void 0 : options.packageName) !== null && _a !== void 0 ? _a : null;
        this.publicKey = (_b = options === null || options === void 0 ? void 0 : options.publicKey) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.packageName != null) {
            properties["packageName"] = this.packageName;
        }
        if (this.publicKey != null) {
            properties["publicKey"] = this.publicKey;
        }
        return properties;
    }
}
exports.default = GooglePlaySetting;
//# sourceMappingURL=GooglePlaySetting.js.map