"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessLog {
    constructor(timestamp, requestId, service, method, request, result, options = null) {
        var _a;
        this.userId = null;
        this.timestamp = timestamp;
        this.requestId = requestId;
        this.service = service;
        this.method = method;
        this.request = request;
        this.result = result;
        this.userId = (_a = options === null || options === void 0 ? void 0 : options.userId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.method != null) {
            properties["method"] = this.method;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.request != null) {
            properties["request"] = this.request;
        }
        if (this.result != null) {
            properties["result"] = this.result;
        }
        return properties;
    }
}
exports.default = AccessLog;
//# sourceMappingURL=AccessLog.js.map