"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IssueJob {
    constructor(name, issuedCount, issueRequestCount, status, options = null) {
        var _a, _b;
        this.metadata = null;
        this.revision = null;
        this.name = name;
        this.issuedCount = issuedCount;
        this.issueRequestCount = issueRequestCount;
        this.status = status;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.revision = (_b = options === null || options === void 0 ? void 0 : options.revision) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.issuedCount != null) {
            properties["issuedCount"] = this.issuedCount;
        }
        if (this.issueRequestCount != null) {
            properties["issueRequestCount"] = this.issueRequestCount;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }
        return properties;
    }
}
exports.default = IssueJob;
//# sourceMappingURL=IssueJob.js.map