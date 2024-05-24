"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessToken {
    constructor(ownerId, userId, realUserId, expire, timeOffset, options = null) {
        var _a, _b;
        this.federationFromUserId = null;
        this.federationPolicyDocument = null;
        this.ownerId = ownerId;
        this.userId = userId;
        this.realUserId = realUserId;
        this.expire = expire;
        this.timeOffset = timeOffset;
        this.federationFromUserId = (_a = options === null || options === void 0 ? void 0 : options.federationFromUserId) !== null && _a !== void 0 ? _a : null;
        this.federationPolicyDocument = (_b = options === null || options === void 0 ? void 0 : options.federationPolicyDocument) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.ownerId != null) {
            properties["ownerId"] = this.ownerId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.realUserId != null) {
            properties["realUserId"] = this.realUserId;
        }
        if (this.federationFromUserId != null) {
            properties["federationFromUserId"] = this.federationFromUserId;
        }
        if (this.federationPolicyDocument != null) {
            properties["federationPolicyDocument"] = this.federationPolicyDocument;
        }
        if (this.expire != null) {
            properties["expire"] = this.expire;
        }
        if (this.timeOffset != null) {
            properties["timeOffset"] = this.timeOffset;
        }
        return properties;
    }
}
exports.default = AccessToken;
//# sourceMappingURL=AccessToken.js.map