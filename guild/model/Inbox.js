"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inbox {
    constructor(guildName, options = null) {
        var _a, _b, _c;
        this.fromUserIds = null;
        this.receiveMemberRequests = null;
        this.revision = null;
        this.guildName = guildName;
        this.fromUserIds = (_a = options === null || options === void 0 ? void 0 : options.fromUserIds) !== null && _a !== void 0 ? _a : null;
        this.receiveMemberRequests = (_b = options === null || options === void 0 ? void 0 : options.receiveMemberRequests) !== null && _b !== void 0 ? _b : null;
        this.revision = (_c = options === null || options === void 0 ? void 0 : options.revision) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.guildName != null) {
            properties["guildName"] = this.guildName;
        }
        if (this.fromUserIds != null) {
            properties["fromUserIds"] = this.fromUserIds;
        }
        if (this.receiveMemberRequests != null) {
            properties["receiveMemberRequests"] = this.receiveMemberRequests.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = Inbox;
//# sourceMappingURL=Inbox.js.map