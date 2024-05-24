"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReceiveMemberRequest {
    constructor(userId, targetGuildName, options = null) {
        this.userId = userId;
        this.targetGuildName = targetGuildName;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.targetGuildName != null) {
            properties["targetGuildName"] = this.targetGuildName;
        }
        return properties;
    }
}
exports.default = ReceiveMemberRequest;
//# sourceMappingURL=ReceiveMemberRequest.js.map