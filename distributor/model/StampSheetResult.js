"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StampSheetResult {
    constructor(userId, transactionId, sheetRequest, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.taskRequests = null;
        this.taskResultCodes = null;
        this.taskResults = null;
        this.sheetResultCode = null;
        this.sheetResult = null;
        this.nextTransactionId = null;
        this.revision = null;
        this.userId = userId;
        this.transactionId = transactionId;
        this.sheetRequest = sheetRequest;
        this.taskRequests = (_a = options === null || options === void 0 ? void 0 : options.taskRequests) !== null && _a !== void 0 ? _a : null;
        this.taskResultCodes = (_b = options === null || options === void 0 ? void 0 : options.taskResultCodes) !== null && _b !== void 0 ? _b : null;
        this.taskResults = (_c = options === null || options === void 0 ? void 0 : options.taskResults) !== null && _c !== void 0 ? _c : null;
        this.sheetResultCode = (_d = options === null || options === void 0 ? void 0 : options.sheetResultCode) !== null && _d !== void 0 ? _d : null;
        this.sheetResult = (_e = options === null || options === void 0 ? void 0 : options.sheetResult) !== null && _e !== void 0 ? _e : null;
        this.nextTransactionId = (_f = options === null || options === void 0 ? void 0 : options.nextTransactionId) !== null && _f !== void 0 ? _f : null;
        this.revision = (_g = options === null || options === void 0 ? void 0 : options.revision) !== null && _g !== void 0 ? _g : null;
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
        if (this.taskResultCodes != null) {
            properties["taskResultCodes"] = this.taskResultCodes;
        }
        if (this.taskResults != null) {
            properties["taskResults"] = this.taskResults;
        }
        if (this.sheetResultCode != null) {
            properties["sheetResultCode"] = this.sheetResultCode;
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