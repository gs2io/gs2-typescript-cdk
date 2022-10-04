"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoxItem {
    constructor(remaining, initial, options) {
        var _a;
        this.acquireActions = null;
        this.acquireActions = (_a = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _a !== void 0 ? _a : null;
        this.remaining = remaining;
        this.initial = initial;
    }
    properties() {
        let properties = {};
        if (this.acquireActions != null) {
            properties["AcquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.remaining != null) {
            properties["Remaining"] = this.remaining;
        }
        if (this.initial != null) {
            properties["Initial"] = this.initial;
        }
        return properties;
    }
}
exports.default = BoxItem;
//# sourceMappingURL=BoxItem.js.map