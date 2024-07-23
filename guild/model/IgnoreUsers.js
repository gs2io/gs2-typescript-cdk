"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IgnoreUsers {
    constructor(guildModelName, options = null) {
        var _a, _b;
        this.users = null;
        this.revision = null;
        this.guildModelName = guildModelName;
        this.users = (_a = options === null || options === void 0 ? void 0 : options.users) !== null && _a !== void 0 ? _a : null;
        this.revision = (_b = options === null || options === void 0 ? void 0 : options.revision) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.guildModelName != null) {
            properties["guildModelName"] = this.guildModelName;
        }
        if (this.users != null) {
            properties["users"] = this.users.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = IgnoreUsers;
//# sourceMappingURL=IgnoreUsers.js.map