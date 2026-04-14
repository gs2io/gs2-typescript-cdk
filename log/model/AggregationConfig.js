"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AggregationConfig {
    constructor(options = null) {
        var _a, _b;
        this.type = null;
        this.field = null;
        this.type = (_a = options === null || options === void 0 ? void 0 : options.type) !== null && _a !== void 0 ? _a : null;
        this.field = (_b = options === null || options === void 0 ? void 0 : options.field) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.field != null) {
            properties["field"] = this.field;
        }
        return properties;
    }
}
exports.default = AggregationConfig;
//# sourceMappingURL=AggregationConfig.js.map