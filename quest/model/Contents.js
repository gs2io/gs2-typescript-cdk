"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contents {
    constructor(weight, options = null) {
        var _a, _b;
        this.metadata = null;
        this.completeAcquireActions = null;
        this.weight = weight;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.completeAcquireActions = (_b = options === null || options === void 0 ? void 0 : options.completeAcquireActions) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.completeAcquireActions != null) {
            properties["completeAcquireActions"] = this.completeAcquireActions.map(v => v.properties());
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = Contents;
//# sourceMappingURL=Contents.js.map