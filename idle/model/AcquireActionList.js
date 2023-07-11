"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcquireActionList {
    constructor(options = null) {
        var _a;
        this.acquireActions = null;
        this.acquireActions = (_a = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = AcquireActionList;
//# sourceMappingURL=AcquireActionList.js.map