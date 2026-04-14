"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumericRange {
    constructor(min, max, options = null) {
        this.min = min;
        this.max = max;
    }
    properties() {
        let properties = {};
        if (this.min != null) {
            properties["min"] = this.min;
        }
        if (this.max != null) {
            properties["max"] = this.max;
        }
        return properties;
    }
}
exports.default = NumericRange;
//# sourceMappingURL=NumericRange.js.map