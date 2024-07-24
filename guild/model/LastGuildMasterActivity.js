"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LastGuildMasterActivity {
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
exports.default = LastGuildMasterActivity;
//# sourceMappingURL=LastGuildMasterActivity.js.map