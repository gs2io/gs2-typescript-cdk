"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(options = null) {
        var _a, _b, _c;
        this.transactionId = null;
        this.consumeActions = null;
        this.acquireActions = null;
        this.transactionId = (_a = options === null || options === void 0 ? void 0 : options.transactionId) !== null && _a !== void 0 ? _a : null;
        this.consumeActions = (_b = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _b !== void 0 ? _b : null;
        this.acquireActions = (_c = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
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
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map