"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DepositTransaction {
    constructor(price, count, options = null) {
        var _a, _b;
        this.currency = null;
        this.depositedAt = null;
        this.price = price;
        this.count = count;
        this.currency = (_a = options === null || options === void 0 ? void 0 : options.currency) !== null && _a !== void 0 ? _a : null;
        this.depositedAt = (_b = options === null || options === void 0 ? void 0 : options.depositedAt) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.price != null) {
            properties["price"] = this.price;
        }
        if (this.currency != null) {
            properties["currency"] = this.currency;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        if (this.depositedAt != null) {
            properties["depositedAt"] = this.depositedAt;
        }
        return properties;
    }
}
exports.default = DepositTransaction;
//# sourceMappingURL=DepositTransaction.js.map