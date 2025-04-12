"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DailyTransactionHistory {
    constructor(year, month, day, currency, depositAmount, withdrawAmount, issueCount, consumeCount, options = null) {
        var _a;
        this.revision = null;
        this.year = year;
        this.month = month;
        this.day = day;
        this.currency = currency;
        this.depositAmount = depositAmount;
        this.withdrawAmount = withdrawAmount;
        this.issueCount = issueCount;
        this.consumeCount = consumeCount;
        this.revision = (_a = options === null || options === void 0 ? void 0 : options.revision) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.year != null) {
            properties["year"] = this.year;
        }
        if (this.month != null) {
            properties["month"] = this.month;
        }
        if (this.day != null) {
            properties["day"] = this.day;
        }
        if (this.currency != null) {
            properties["currency"] = this.currency;
        }
        if (this.depositAmount != null) {
            properties["depositAmount"] = this.depositAmount;
        }
        if (this.withdrawAmount != null) {
            properties["withdrawAmount"] = this.withdrawAmount;
        }
        if (this.issueCount != null) {
            properties["issueCount"] = this.issueCount;
        }
        if (this.consumeCount != null) {
            properties["consumeCount"] = this.consumeCount;
        }
        return properties;
    }
}
exports.default = DailyTransactionHistory;
//# sourceMappingURL=DailyTransactionHistory.js.map