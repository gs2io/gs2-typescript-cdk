"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReceiveMemberRequest {
    constructor(userId, targetGuildName, options = null) {
        var _a;
        this.metadata = null;
        this.userId = userId;
        this.targetGuildName = targetGuildName;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.targetGuildName != null) {
            properties["targetGuildName"] = this.targetGuildName;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        return properties;
    }
}
exports.default = ReceiveMemberRequest;
//# sourceMappingURL=ReceiveMemberRequest.js.map