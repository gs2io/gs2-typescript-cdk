"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionModelScope_1 = require("./enum/VersionModelScope");
class VersionModel {
    constructor(name, warningVersion, errorVersion, scope, options = null) {
        var _a, _b, _c, _d;
        this.metadata = null;
        this.currentVersion = null;
        this.needSignature = null;
        this.signatureKeyId = null;
        this.name = name;
        this.warningVersion = warningVersion;
        this.errorVersion = errorVersion;
        this.scope = scope;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.currentVersion = (_b = options === null || options === void 0 ? void 0 : options.currentVersion) !== null && _b !== void 0 ? _b : null;
        this.needSignature = (_c = options === null || options === void 0 ? void 0 : options.needSignature) !== null && _c !== void 0 ? _c : null;
        this.signatureKeyId = (_d = options === null || options === void 0 ? void 0 : options.signatureKeyId) !== null && _d !== void 0 ? _d : null;
    }
    static scopeIsPassive(name, warningVersion, errorVersion, needSignature, options = null) {
        return new VersionModel(name, warningVersion, errorVersion, VersionModelScope_1.VersionModelScope.PASSIVE, {
            needSignature: needSignature,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
        });
    }
    static scopeIsActive(name, warningVersion, errorVersion, currentVersion, options = null) {
        return new VersionModel(name, warningVersion, errorVersion, VersionModelScope_1.VersionModelScope.ACTIVE, {
            currentVersion: currentVersion,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
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
        if (this.warningVersion != null) {
            properties["warningVersion"] = (_a = this.warningVersion) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.errorVersion != null) {
            properties["errorVersion"] = (_b = this.errorVersion) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.scope != null) {
            properties["scope"] = this.scope;
        }
        if (this.currentVersion != null) {
            properties["currentVersion"] = (_c = this.currentVersion) === null || _c === void 0 ? void 0 : _c.properties();
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