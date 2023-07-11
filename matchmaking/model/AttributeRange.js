"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeRange {
    constructor(name, min, max, options = null) {
        this.name = name;
        this.min = min;
        this.max = max;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.min != null) {
            properties["min"] = this.min;
        }
        if (this.max != null) {
            properties["max"] = this.max;
        }
        return properties;
    }
}
exports.default = AttributeRange;
//# sourceMappingURL=AttributeRange.js.map