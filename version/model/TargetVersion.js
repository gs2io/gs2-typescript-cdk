"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TargetVersion {
    constructor(versionName, version, options = null) {
        var _a, _b;
        this.body = null;
        this.signature = null;
        this.versionName = versionName;
        this.version = version;
        this.body = (_a = options === null || options === void 0 ? void 0 : options.body) !== null && _a !== void 0 ? _a : null;
        this.signature = (_b = options === null || options === void 0 ? void 0 : options.signature) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.versionName != null) {
            properties["versionName"] = this.versionName;
        }
        if (this.version != null) {
            properties["version"] = (_a = this.version) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.body != null) {
            properties["body"] = this.body;
        }
        if (this.signature != null) {
            properties["signature"] = this.signature;
        }
        return properties;
    }
}
exports.default = TargetVersion;
//# sourceMappingURL=TargetVersion.js.map