"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChangeStateEvent {
    constructor(taskName, hash, timestamp, options = null) {
        this.taskName = taskName;
        this.hash = hash;
        this.timestamp = timestamp;
    }
    properties() {
        let properties = {};
        if (this.taskName != null) {
            properties["taskName"] = this.taskName;
        }
        if (this.hash != null) {
            properties["hash"] = this.hash;
        }
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        return properties;
    }
}
exports.default = ChangeStateEvent;
//# sourceMappingURL=ChangeStateEvent.js.map