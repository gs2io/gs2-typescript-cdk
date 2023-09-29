"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoxItem {
    constructor(prizeId, remaining, initial, options = null) {
        var _a;
        this.acquireActions = null;
        this.prizeId = prizeId;
        this.remaining = remaining;
        this.initial = initial;
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
        if (this.remaining != null) {
            properties["remaining"] = this.remaining;
        }
        if (this.initial != null) {
            properties["initial"] = this.initial;
        }
        return properties;
    }
}
exports.default = BoxItem;
//# sourceMappingURL=BoxItem.js.map