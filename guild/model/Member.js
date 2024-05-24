"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Member {
    constructor(userId, roleName, options = null) {
        this.userId = userId;
        this.roleName = roleName;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.roleName != null) {
            properties["roleName"] = this.roleName;
        }
        return properties;
    }
}
exports.default = Member;
//# sourceMappingURL=Member.js.map