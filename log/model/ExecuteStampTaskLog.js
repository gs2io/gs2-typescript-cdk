"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExecuteStampTaskLog {
    constructor(timestamp, taskId, service, method, userId, action, args, options = null) {
        this.timestamp = timestamp;
        this.taskId = taskId;
        this.service = service;
        this.method = method;
        this.userId = userId;
        this.action = action;
        this.args = args;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.taskId != null) {
            properties["taskId"] = this.taskId;
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
        if (this.action != null) {
            properties["action"] = this.action;
        }
        if (this.args != null) {
            properties["args"] = this.args;
        }
        return properties;
    }
}
exports.default = ExecuteStampTaskLog;
//# sourceMappingURL=ExecuteStampTaskLog.js.map