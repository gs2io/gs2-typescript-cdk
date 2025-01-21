"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Member {
    constructor(userId, roleName, options = null) {
        var _a;
        this.metadata = null;
        this.userId = userId;
        this.roleName = roleName;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.roleName != null) {
            properties["roleName"] = this.roleName;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        return properties;
    }
}
exports.default = Member;
//# sourceMappingURL=Member.js.map