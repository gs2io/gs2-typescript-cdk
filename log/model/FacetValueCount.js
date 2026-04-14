"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FacetValueCount {
    constructor(value, count, options = null) {
        this.value = value;
        this.count = count;
    }
    properties() {
        let properties = {};
        if (this.value != null) {
            properties["value"] = this.value;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = FacetValueCount;
//# sourceMappingURL=FacetValueCount.js.map