"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(options = null) {
        var _a, _b;
        this.consumeActions = null;
        this.acquireActions = null;
        this.consumeActions = (_a = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _a !== void 0 ? _a : null;
        this.acquireActions = (_b = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map