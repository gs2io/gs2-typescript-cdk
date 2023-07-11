"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DrawnPrize {
    constructor(prizeId, options = null) {
        var _a;
        this.acquireActions = null;
        this.prizeId = prizeId;
        this.acquireActions = (_a = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.prizeId != null) {
            properties["prizeId"] = this.prizeId;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = DrawnPrize;
//# sourceMappingURL=DrawnPrize.js.map