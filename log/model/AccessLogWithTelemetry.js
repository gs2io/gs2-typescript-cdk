"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessLogWithTelemetry {
    constructor(timestamp, sourceRequestId, requestId, duration, service, method, request, result, status, options = null) {
        var _a;
        this.userId = null;
        this.timestamp = timestamp;
        this.sourceRequestId = sourceRequestId;
        this.requestId = requestId;
        this.duration = duration;
        this.service = service;
        this.method = method;
        this.request = request;
        this.result = result;
        this.status = status;
        this.userId = (_a = options === null || options === void 0 ? void 0 : options.userId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.sourceRequestId != null) {
            properties["sourceRequestId"] = this.sourceRequestId;
        }
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.duration != null) {
            properties["duration"] = this.duration;
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
        if (this.status != null) {
            properties["status"] = this.status;
        }
        return properties;
    }
}
exports.default = AccessLogWithTelemetry;
//# sourceMappingURL=AccessLogWithTelemetry.js.map