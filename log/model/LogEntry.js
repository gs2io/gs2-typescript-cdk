"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogEntry {
    constructor(timestamp, status, duration, line, options = null) {
        var _a;
        this.labels = null;
        this.timestamp = timestamp;
        this.status = status;
        this.duration = duration;
        this.line = line;
        this.labels = (_a = options === null || options === void 0 ? void 0 : options.labels) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }
        if (this.duration != null) {
            properties["duration"] = this.duration;
        }
        if (this.line != null) {
            properties["line"] = this.line;
        }
        if (this.labels != null) {
            properties["labels"] = this.labels.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = LogEntry;
//# sourceMappingURL=LogEntry.js.map