"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatchRequestPayload {
    constructor(requestId, service, methodName, parameter, options = null) {
        this.requestId = requestId;
        this.service = service;
        this.methodName = methodName;
        this.parameter = parameter;
    }
    properties() {
        let properties = {};
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.methodName != null) {
            properties["methodName"] = this.methodName;
        }
        if (this.parameter != null) {
            properties["parameter"] = this.parameter;
        }
        return properties;
    }
}
exports.default = BatchRequestPayload;
//# sourceMappingURL=BatchRequestPayload.js.map