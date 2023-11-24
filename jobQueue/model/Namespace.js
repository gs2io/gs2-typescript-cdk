"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Namespace {
    constructor(ownerId, name, enableAutoRun, options = null) {
        var _a, _b, _c, _d, _e;
        this.description = null;
        this.runNotification = null;
        this.pushNotification = null;
        this.logSetting = null;
        this.revision = null;
        this.ownerId = ownerId;
        this.name = name;
        this.enableAutoRun = enableAutoRun;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.runNotification = (_b = options === null || options === void 0 ? void 0 : options.runNotification) !== null && _b !== void 0 ? _b : null;
        this.pushNotification = (_c = options === null || options === void 0 ? void 0 : options.pushNotification) !== null && _c !== void 0 ? _c : null;
        this.logSetting = (_d = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _d !== void 0 ? _d : null;
        this.revision = (_e = options === null || options === void 0 ? void 0 : options.revision) !== null && _e !== void 0 ? _e : null;
    }
    properties() {
        var _a, _b, _c;
        let properties = {};
        if (this.ownerId != null) {
            properties["ownerId"] = this.ownerId;
        }
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.description != null) {
            properties["description"] = this.description;
        }
        if (this.enableAutoRun != null) {
            properties["enableAutoRun"] = this.enableAutoRun;
        }
        if (this.runNotification != null) {
            properties["runNotification"] = (_a = this.runNotification) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.pushNotification != null) {
            properties["pushNotification"] = (_b = this.pushNotification) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.logSetting != null) {
            properties["logSetting"] = (_c = this.logSetting) === null || _c === void 0 ? void 0 : _c.properties();
        }
        return properties;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map