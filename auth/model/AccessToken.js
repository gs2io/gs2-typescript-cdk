"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessToken {
    constructor(ownerId, userId, expire, timeOffset, options = null) {
        this.ownerId = ownerId;
        this.userId = userId;
        this.expire = expire;
        this.timeOffset = timeOffset;
    }
    properties() {
        let properties = {};
        if (this.ownerId != null) {
            properties["ownerId"] = this.ownerId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
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