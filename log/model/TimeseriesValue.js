"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeseriesValue {
    constructor(key, value, options = null) {
        this.key = key;
        this.value = value;
    }
    properties() {
        let properties = {};
        if (this.key != null) {
            properties["key"] = this.key;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
}
exports.default = TimeseriesValue;
//# sourceMappingURL=TimeseriesValue.js.map