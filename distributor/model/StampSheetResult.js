"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StampSheetResult {
    constructor(userId, transactionId, sheetRequest, options = null) {
        var _a, _b, _c, _d;
        this.taskRequests = null;
        this.taskResults = null;
        this.sheetResult = null;
        this.nextTransactionId = null;
        this.userId = userId;
        this.transactionId = transactionId;
        this.sheetRequest = sheetRequest;
        this.taskRequests = (_a = options === null || options === void 0 ? void 0 : options.taskRequests) !== null && _a !== void 0 ? _a : null;
        this.taskResults = (_b = options === null || options === void 0 ? void 0 : options.taskResults) !== null && _b !== void 0 ? _b : null;
        this.sheetResult = (_c = options === null || options === void 0 ? void 0 : options.sheetResult) !== null && _c !== void 0 ? _c : null;
        this.nextTransactionId = (_d = options === null || options === void 0 ? void 0 : options.nextTransactionId) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.taskRequests != null) {
            properties["taskRequests"] = this.taskRequests.map(v => v.properties());
        }
        if (this.sheetRequest != null) {
            properties["sheetRequest"] = (_a = this.sheetRequest) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.taskResults != null) {
            properties["taskResults"] = this.taskResults;
        }
        if (this.sheetResult != null) {
            properties["sheetResult"] = this.sheetResult;
        }
        if (this.nextTransactionId != null) {
            properties["nextTransactionId"] = this.nextTransactionId;
        }
        return properties;
    }
}
exports.default = StampSheetResult;
//# sourceMappingURL=StampSheetResult.js.map