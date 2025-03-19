"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RefundHistory {
    constructor(transactionId, year, month, day, detail, options = null) {
        var _a;
        this.userId = null;
        this.transactionId = transactionId;
        this.year = year;
        this.month = month;
        this.day = day;
        this.detail = detail;
        this.userId = (_a = options === null || options === void 0 ? void 0 : options.userId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.year != null) {
            properties["year"] = this.year;
        }
        if (this.month != null) {
            properties["month"] = this.month;
        }
        if (this.day != null) {
            properties["day"] = this.day;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.detail != null) {
            properties["detail"] = (_a = this.detail) === null || _a === void 0 ? void 0 : _a.properties();
        }
        return properties;
    }
}
exports.default = RefundHistory;
//# sourceMappingURL=RefundHistory.js.map