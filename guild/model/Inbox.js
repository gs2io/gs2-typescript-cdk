"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inbox {
    constructor(guildName, options = null) {
        var _a, _b;
        this.fromUserIds = null;
        this.revision = null;
        this.guildName = guildName;
        this.fromUserIds = (_a = options === null || options === void 0 ? void 0 : options.fromUserIds) !== null && _a !== void 0 ? _a : null;
        this.revision = (_b = options === null || options === void 0 ? void 0 : options.revision) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.guildName != null) {
            properties["guildName"] = this.guildName;
        }
        if (this.fromUserIds != null) {
            properties["fromUserIds"] = this.fromUserIds;
        }
        return properties;
    }
}
exports.default = Inbox;
//# sourceMappingURL=Inbox.js.map