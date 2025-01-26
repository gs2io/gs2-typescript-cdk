"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpenIdConnectSetting {
    constructor(configurationPath, clientId, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.clientSecret = null;
        this.appleTeamId = null;
        this.appleKeyId = null;
        this.applePrivateKeyPem = null;
        this.doneEndpointUrl = null;
        this.additionalScopeValues = null;
        this.additionalReturnValues = null;
        this.configurationPath = configurationPath;
        this.clientId = clientId;
        this.clientSecret = (_a = options === null || options === void 0 ? void 0 : options.clientSecret) !== null && _a !== void 0 ? _a : null;
        this.appleTeamId = (_b = options === null || options === void 0 ? void 0 : options.appleTeamId) !== null && _b !== void 0 ? _b : null;
        this.appleKeyId = (_c = options === null || options === void 0 ? void 0 : options.appleKeyId) !== null && _c !== void 0 ? _c : null;
        this.applePrivateKeyPem = (_d = options === null || options === void 0 ? void 0 : options.applePrivateKeyPem) !== null && _d !== void 0 ? _d : null;
        this.doneEndpointUrl = (_e = options === null || options === void 0 ? void 0 : options.doneEndpointUrl) !== null && _e !== void 0 ? _e : null;
        this.additionalScopeValues = (_f = options === null || options === void 0 ? void 0 : options.additionalScopeValues) !== null && _f !== void 0 ? _f : null;
        this.additionalReturnValues = (_g = options === null || options === void 0 ? void 0 : options.additionalReturnValues) !== null && _g !== void 0 ? _g : null;
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
        if (this.doneEndpointUrl != null) {
            properties["doneEndpointUrl"] = this.doneEndpointUrl;
        }
        if (this.additionalScopeValues != null) {
            properties["additionalScopeValues"] = this.additionalScopeValues.map(v => v.properties());
        }
        if (this.additionalReturnValues != null) {
            properties["additionalReturnValues"] = this.additionalReturnValues;
        }
        return properties;
    }
}
exports.default = OpenIdConnectSetting;
//# sourceMappingURL=OpenIdConnectSetting.js.map