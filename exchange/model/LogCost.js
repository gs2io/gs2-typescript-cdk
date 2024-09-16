"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogCost {
    constructor(base, adds, options = null) {
        var _a;
        this.subs = null;
        this.base = base;
        this.adds = adds;
        this.subs = (_a = options === null || options === void 0 ? void 0 : options.subs) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.base != null) {
            properties["base"] = this.base;
        }
        if (this.adds != null) {
            properties["adds"] = this.adds;
        }
        if (this.subs != null) {
            properties["subs"] = this.subs;
        }
        return properties;
    }
}
exports.default = LogCost;
//# sourceMappingURL=LogCost.js.map