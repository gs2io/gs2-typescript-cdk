"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeseriesMetadata {
    constructor(options = null) {
        var _a, _b;
        this.keys = null;
        this.groupBy = null;
        this.keys = (_a = options === null || options === void 0 ? void 0 : options.keys) !== null && _a !== void 0 ? _a : null;
        this.groupBy = (_b = options === null || options === void 0 ? void 0 : options.groupBy) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.keys != null) {
            properties["keys"] = this.keys;
        }
        if (this.groupBy != null) {
            properties["groupBy"] = this.groupBy;
        }
        return properties;
    }
}
exports.default = TimeseriesMetadata;
//# sourceMappingURL=TimeseriesMetadata.js.map