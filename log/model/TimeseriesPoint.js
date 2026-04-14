"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeseriesPoint {
    constructor(timestamp, options = null) {
        var _a;
        this.values = null;
        this.timestamp = timestamp;
        this.values = (_a = options === null || options === void 0 ? void 0 : options.values) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.values != null) {
            properties["values"] = this.values.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = TimeseriesPoint;
//# sourceMappingURL=TimeseriesPoint.js.map