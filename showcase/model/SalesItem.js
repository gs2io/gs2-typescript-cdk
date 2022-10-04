"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SalesItem {
    constructor(name, consumeActions, acquireActions, options) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.consumeActions = consumeActions;
        this.acquireActions = acquireActions;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.consumeActions != null) {
            properties["ConsumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.acquireActions != null) {
            properties["AcquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = SalesItem;
//# sourceMappingURL=SalesItem.js.map