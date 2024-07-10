"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlatformUser {
    constructor(type, userIdentifier, userId, options = null) {
        this.type = type;
        this.userIdentifier = userIdentifier;
        this.userId = userId;
    }
    properties() {
        let properties = {};
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.userIdentifier != null) {
            properties["userIdentifier"] = this.userIdentifier;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        return properties;
    }
}
exports.default = PlatformUser;
//# sourceMappingURL=PlatformUser.js.map