"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CapacityOfRole {
    constructor(roleName, capacity, options = null) {
        var _a, _b;
        this.roleAliases = null;
        this.participants = null;
        this.roleName = roleName;
        this.capacity = capacity;
        this.roleAliases = (_a = options === null || options === void 0 ? void 0 : options.roleAliases) !== null && _a !== void 0 ? _a : null;
        this.participants = (_b = options === null || options === void 0 ? void 0 : options.participants) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.roleName != null) {
            properties["roleName"] = this.roleName;
        }
        if (this.roleAliases != null) {
            properties["roleAliases"] = this.roleAliases;
        }
        if (this.capacity != null) {
            properties["capacity"] = this.capacity;
        }
        if (this.participants != null) {
            properties["participants"] = this.participants.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = CapacityOfRole;
//# sourceMappingURL=CapacityOfRole.js.map