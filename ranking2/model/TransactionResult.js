"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionResult {
    constructor(transactionId, options = null) {
        var _a, _b, _c;
        this.verifyResults = null;
        this.consumeResults = null;
        this.acquireResults = null;
        this.transactionId = transactionId;
        this.verifyResults = (_a = options === null || options === void 0 ? void 0 : options.verifyResults) !== null && _a !== void 0 ? _a : null;
        this.consumeResults = (_b = options === null || options === void 0 ? void 0 : options.consumeResults) !== null && _b !== void 0 ? _b : null;
        this.acquireResults = (_c = options === null || options === void 0 ? void 0 : options.acquireResults) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.verifyResults != null) {
            properties["verifyResults"] = this.verifyResults.map(v => v.properties());
        }
        if (this.consumeResults != null) {
            properties["consumeResults"] = this.consumeResults.map(v => v.properties());
        }
        if (this.acquireResults != null) {
            properties["acquireResults"] = this.acquireResults.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = TransactionResult;
//# sourceMappingURL=TransactionResult.js.map