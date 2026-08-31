"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LastGuildMasterActivity {
    constructor(userId, options = null) {
        var _a;
        this.revision = null;
        this.userId = userId;
        this.revision = (_a = options === null || options === void 0 ? void 0 : options.revision) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        return properties;
    }
}
exports.default = LastGuildMasterActivity;
//# sourceMappingURL=LastGuildMasterActivity.js.map