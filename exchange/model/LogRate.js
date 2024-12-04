"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogRate {
    constructor(base, logs, options = null) {
        this.base = base;
        this.logs = logs;
    }
    properties() {
        let properties = {};
        if (this.base != null) {
            properties["base"] = this.base;
        }
        if (this.logs != null) {
            properties["logs"] = this.logs;
        }
        return properties;
    }
}
exports.default = LogRate;
//# sourceMappingURL=LogRate.js.map