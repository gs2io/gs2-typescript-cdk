"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnusedBalance {
    constructor(currency, balance, options = null) {
        var _a;
        this.revision = null;
        this.currency = currency;
        this.balance = balance;
        this.revision = (_a = options === null || options === void 0 ? void 0 : options.revision) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.currency != null) {
            properties["currency"] = this.currency;
        }
        if (this.balance != null) {
            properties["balance"] = this.balance;
        }
        return properties;
    }
}
exports.default = UnusedBalance;
//# sourceMappingURL=UnusedBalance.js.map