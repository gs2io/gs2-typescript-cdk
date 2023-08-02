"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomDisplayItemModel {
    constructor(name, acquireActions, stock, weight, options = null) {
        var _a, _b;
        this.metadata = null;
        this.consumeActions = null;
        this.name = name;
        this.acquireActions = acquireActions;
        this.stock = stock;
        this.weight = weight;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.consumeActions = (_b = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.stock != null) {
            properties["stock"] = this.stock;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = RandomDisplayItemModel;
//# sourceMappingURL=RandomDisplayItemModel.js.map