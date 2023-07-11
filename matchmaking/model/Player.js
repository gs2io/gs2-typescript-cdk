"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(userId, roleName, options = null) {
        var _a, _b;
        this.attributes = null;
        this.denyUserIds = null;
        this.userId = userId;
        this.roleName = roleName;
        this.attributes = (_a = options === null || options === void 0 ? void 0 : options.attributes) !== null && _a !== void 0 ? _a : null;
        this.denyUserIds = (_b = options === null || options === void 0 ? void 0 : options.denyUserIds) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.attributes != null) {
            properties["attributes"] = this.attributes.map(v => v.properties());
        }
        if (this.roleName != null) {
            properties["roleName"] = this.roleName;
        }
        if (this.denyUserIds != null) {
            properties["denyUserIds"] = this.denyUserIds;
        }
        return properties;
    }
}
exports.default = Player;
//# sourceMappingURL=Player.js.map