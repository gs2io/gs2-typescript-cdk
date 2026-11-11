"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParticipantSetting {
    constructor(userId, scriptId, options = null) {
        this.userId = userId;
        this.scriptId = scriptId;
    }
    properties() {
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.scriptId != null) {
            properties["scriptId"] = this.scriptId;
        }
        return properties;
    }
}
exports.default = ParticipantSetting;
//# sourceMappingURL=ParticipantSetting.js.map