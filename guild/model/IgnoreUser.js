"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IgnoreUser {
    constructor(userId, options = null) {
        this.userId = userId;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        return properties;
    }
}
exports.default = IgnoreUser;
//# sourceMappingURL=IgnoreUser.js.map