"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignTargetVersion {
    constructor(region, ownerId, namespaceName, versionName, version, options = null) {
        this.region = region;
        this.ownerId = ownerId;
        this.namespaceName = namespaceName;
        this.versionName = versionName;
        this.version = version;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.region != null) {
            properties["region"] = this.region;
        }
        if (this.ownerId != null) {
            properties["ownerId"] = this.ownerId;
        }
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.versionName != null) {
            properties["versionName"] = this.versionName;
        }
        if (this.version != null) {
            properties["version"] = (_a = this.version) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = SignTargetVersion;
//# sourceMappingURL=SignTargetVersion.js.map