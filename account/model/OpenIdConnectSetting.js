"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpenIdConnectSetting {
    constructor(configurationPath, clientId, options = null) {
        var _a, _b, _c, _d;
        this.clientSecret = null;
        this.appleTeamId = null;
        this.appleKeyId = null;
        this.applePrivateKeyPem = null;
        this.configurationPath = configurationPath;
        this.clientId = clientId;
        this.clientSecret = (_a = options === null || options === void 0 ? void 0 : options.clientSecret) !== null && _a !== void 0 ? _a : null;
        this.appleTeamId = (_b = options === null || options === void 0 ? void 0 : options.appleTeamId) !== null && _b !== void 0 ? _b : null;
        this.appleKeyId = (_c = options === null || options === void 0 ? void 0 : options.appleKeyId) !== null && _c !== void 0 ? _c : null;
        this.applePrivateKeyPem = (_d = options === null || options === void 0 ? void 0 : options.applePrivateKeyPem) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.configurationPath != null) {
            properties["configurationPath"] = this.configurationPath;
        }
        if (this.clientId != null) {
            properties["clientId"] = this.clientId;
        }
        if (this.clientSecret != null) {
            properties["clientSecret"] = this.clientSecret;
        }
        if (this.appleTeamId != null) {
            properties["appleTeamId"] = this.appleTeamId;
        }
        if (this.appleKeyId != null) {
            properties["appleKeyId"] = this.appleKeyId;
        }
        if (this.applePrivateKeyPem != null) {
            properties["applePrivateKeyPem"] = this.applePrivateKeyPem;
        }
        return properties;
    }
}
exports.default = OpenIdConnectSetting;
//# sourceMappingURL=OpenIdConnectSetting.js.map