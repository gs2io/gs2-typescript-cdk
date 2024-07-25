"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(options = null) {
        var _a, _b, _c, _d;
        this.transactionId = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.acquireActions = null;
        this.transactionId = (_a = options === null || options === void 0 ? void 0 : options.transactionId) !== null && _a !== void 0 ? _a : null;
        this.verifyActions = (_b = options === null || options === void 0 ? void 0 : options.verifyActions) !== null && _b !== void 0 ? _b : null;
        this.consumeActions = (_c = options === null || options === void 0 ? void 0 : options.consumeActions) !== null && _c !== void 0 ? _c : null;
        this.acquireActions = (_d = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
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
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map