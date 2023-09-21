"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionModelScope_1 = require("./enum/VersionModelScope");
const VersionModelType_1 = require("./enum/VersionModelType");
class VersionModel {
    constructor(name, scope, type, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.metadata = null;
        this.currentVersion = null;
        this.warningVersion = null;
        this.errorVersion = null;
        this.scheduleVersions = null;
        this.needSignature = null;
        this.signatureKeyId = null;
        this.name = name;
        this.scope = scope;
        this.type = type;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.currentVersion = (_b = options === null || options === void 0 ? void 0 : options.currentVersion) !== null && _b !== void 0 ? _b : null;
        this.warningVersion = (_c = options === null || options === void 0 ? void 0 : options.warningVersion) !== null && _c !== void 0 ? _c : null;
        this.errorVersion = (_d = options === null || options === void 0 ? void 0 : options.errorVersion) !== null && _d !== void 0 ? _d : null;
        this.scheduleVersions = (_e = options === null || options === void 0 ? void 0 : options.scheduleVersions) !== null && _e !== void 0 ? _e : null;
        this.needSignature = (_f = options === null || options === void 0 ? void 0 : options.needSignature) !== null && _f !== void 0 ? _f : null;
        this.signatureKeyId = (_g = options === null || options === void 0 ? void 0 : options.signatureKeyId) !== null && _g !== void 0 ? _g : null;
    }
    static typeIsSimple(name, scope, warningVersion, errorVersion, options = null) {
        return new VersionModel(name, scope, VersionModelType_1.VersionModelType.SIMPLE, {
            warningVersion: warningVersion,
            errorVersion: errorVersion,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            scheduleVersions: options === null || options === void 0 ? void 0 : options.scheduleVersions,
        });
    }
    static typeIsSchedule(name, scope, options = null) {
        return new VersionModel(name, scope, VersionModelType_1.VersionModelType.SCHEDULE, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            scheduleVersions: options === null || options === void 0 ? void 0 : options.scheduleVersions,
        });
    }
    static scopeIsPassive(name, type, needSignature, options = null) {
        return new VersionModel(name, VersionModelScope_1.VersionModelScope.PASSIVE, type, {
            needSignature: needSignature,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            scheduleVersions: options === null || options === void 0 ? void 0 : options.scheduleVersions,
        });
    }
    static scopeIsActive(name, type, options = null) {
        return new VersionModel(name, VersionModelScope_1.VersionModelScope.ACTIVE, type, {
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            scheduleVersions: options === null || options === void 0 ? void 0 : options.scheduleVersions,
        });
    }
    properties() {
        var _a, _b, _c;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.scope != null) {
            properties["scope"] = this.scope;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.currentVersion != null) {
            properties["currentVersion"] = (_a = this.currentVersion) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.warningVersion != null) {
            properties["warningVersion"] = (_b = this.warningVersion) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.errorVersion != null) {
            properties["errorVersion"] = (_c = this.errorVersion) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.scheduleVersions != null) {
            properties["scheduleVersions"] = this.scheduleVersions.map(v => v.properties());
        }
        if (this.needSignature != null) {
            properties["needSignature"] = this.needSignature;
        }
        if (this.signatureKeyId != null) {
            properties["signatureKeyId"] = this.signatureKeyId;
        }
        return properties;
    }
}
exports.default = VersionModel;
//# sourceMappingURL=VersionModel.js.map