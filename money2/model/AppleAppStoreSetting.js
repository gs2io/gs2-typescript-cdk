"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppleAppStoreSetting {
    constructor(options = null) {
        var _a, _b, _c, _d;
        this.bundleId = null;
        this.issuerId = null;
        this.keyId = null;
        this.privateKeyPem = null;
        this.bundleId = (_a = options === null || options === void 0 ? void 0 : options.bundleId) !== null && _a !== void 0 ? _a : null;
        this.issuerId = (_b = options === null || options === void 0 ? void 0 : options.issuerId) !== null && _b !== void 0 ? _b : null;
        this.keyId = (_c = options === null || options === void 0 ? void 0 : options.keyId) !== null && _c !== void 0 ? _c : null;
        this.privateKeyPem = (_d = options === null || options === void 0 ? void 0 : options.privateKeyPem) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.bundleId != null) {
            properties["bundleId"] = this.bundleId;
        }
        if (this.issuerId != null) {
            properties["issuerId"] = this.issuerId;
        }
        if (this.keyId != null) {
            properties["keyId"] = this.keyId;
        }
        if (this.privateKeyPem != null) {
            properties["privateKeyPem"] = this.privateKeyPem;
        }
        return properties;
    }
}
exports.default = AppleAppStoreSetting;
//# sourceMappingURL=AppleAppStoreSetting.js.map