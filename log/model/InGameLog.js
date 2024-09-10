"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InGameLog {
    constructor(timestamp, requestId, payload, options = null) {
        var _a, _b;
        this.userId = null;
        this.tags = null;
        this.timestamp = timestamp;
        this.requestId = requestId;
        this.payload = payload;
        this.userId = (_a = options === null || options === void 0 ? void 0 : options.userId) !== null && _a !== void 0 ? _a : null;
        this.tags = (_b = options === null || options === void 0 ? void 0 : options.tags) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.tags != null) {
            properties["tags"] = this.tags.map(v => v.properties());
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }
        return properties;
    }
}
exports.default = InGameLog;
//# sourceMappingURL=InGameLog.js.map