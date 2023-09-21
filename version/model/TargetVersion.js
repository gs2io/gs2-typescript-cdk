"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TargetVersion {
    constructor(versionName, options = null) {
        var _a, _b, _c;
        this.body = null;
        this.signature = null;
        this.version = null;
        this.versionName = versionName;
        this.body = (_a = options === null || options === void 0 ? void 0 : options.body) !== null && _a !== void 0 ? _a : null;
        this.signature = (_b = options === null || options === void 0 ? void 0 : options.signature) !== null && _b !== void 0 ? _b : null;
        this.version = (_c = options === null || options === void 0 ? void 0 : options.version) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.versionName != null) {
            properties["versionName"] = this.versionName;
        }
        if (this.body != null) {
            properties["body"] = this.body;
        }
        if (this.signature != null) {
            properties["signature"] = this.signature;
        }
        if (this.version != null) {
            properties["version"] = (_a = this.version) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = TargetVersion;
//# sourceMappingURL=TargetVersion.js.map