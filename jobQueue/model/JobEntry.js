"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JobEntry {
    constructor(scriptId, args, maxTryCount, options = null) {
        this.scriptId = scriptId;
        this.args = args;
        this.maxTryCount = maxTryCount;
    }
    properties() {
        let properties = {};
        if (this.scriptId != null) {
            properties["scriptId"] = this.scriptId;
        }
        if (this.args != null) {
            properties["args"] = this.args;
        }
        if (this.maxTryCount != null) {
            properties["maxTryCount"] = this.maxTryCount;
        }
        return properties;
    }
}
exports.default = JobEntry;
//# sourceMappingURL=JobEntry.js.map