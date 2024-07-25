"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SalesItem {
    constructor(name, acquireActions, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.name = name;
        this.acquireActions = acquireActions;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.verifyActions = (_b = options === null || options === void 0 ? void 0 : options.verifyActions) !== null && _b !== void 0 ? _b : null;
        this.consumeActions = (_c = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.verifyActions != null) {
            properties["verifyActions"] = this.verifyActions.map(v => v.properties());
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = SalesItem;
//# sourceMappingURL=SalesItem.js.map