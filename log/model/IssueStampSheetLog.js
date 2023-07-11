"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IssueStampSheetLog {
    constructor(timestamp, transactionId, service, method, userId, action, args, options = null) {
        var _a;
        this.tasks = null;
        this.timestamp = timestamp;
        this.transactionId = transactionId;
        this.service = service;
        this.method = method;
        this.userId = userId;
        this.action = action;
        this.args = args;
        this.tasks = (_a = options === null || options === void 0 ? void 0 : options.tasks) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
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
        if (this.tasks != null) {
            properties["tasks"] = this.tasks;
        }
        return properties;
    }
}
exports.default = IssueStampSheetLog;
//# sourceMappingURL=IssueStampSheetLog.js.map