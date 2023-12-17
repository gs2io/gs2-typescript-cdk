"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmitEvent {
    constructor(event, parameters, timestamp, options = null) {
        this.event = event;
        this.parameters = parameters;
        this.timestamp = timestamp;
    }
    properties() {
        let properties = {};
        if (this.event != null) {
            properties["event"] = this.event;
        }
        if (this.parameters != null) {
            properties["parameters"] = this.parameters;
        }
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        return properties;
    }
}
exports.default = EmitEvent;
//# sourceMappingURL=EmitEvent.js.map