"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trace {
    constructor(truncated, options = null) {
        var _a;
        this.spans = null;
        this.truncated = truncated;
        this.spans = (_a = options === null || options === void 0 ? void 0 : options.spans) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.spans != null) {
            properties["spans"] = this.spans.map(v => v.properties());
        }
        if (this.truncated != null) {
            properties["truncated"] = this.truncated;
        }
        return properties;
    }
}
exports.default = Trace;
//# sourceMappingURL=Trace.js.map