"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Threshold {
    constructor(values, options = null) {
        var _a;
        this.metadata = null;
        this.values = values;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.values != null) {
            properties["values"] = this.values;
        }
        return properties;
    }
}
exports.default = Threshold;
//# sourceMappingURL=Threshold.js.map