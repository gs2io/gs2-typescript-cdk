"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Status {
    constructor(versionModel, options = null) {
        var _a;
        this.currentVersion = null;
        this.versionModel = versionModel;
        this.currentVersion = (_a = options === null || options === void 0 ? void 0 : options.currentVersion) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.versionModel != null) {
            properties["versionModel"] = (_a = this.versionModel) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.currentVersion != null) {
            properties["currentVersion"] = (_b = this.currentVersion) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = Status;
//# sourceMappingURL=Status.js.map