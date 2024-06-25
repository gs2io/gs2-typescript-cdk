"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GooglePlayVerifyReceiptEvent {
    constructor(options = null) {
        var _a;
        this.purchaseToken = null;
        this.purchaseToken = (_a = options === null || options === void 0 ? void 0 : options.purchaseToken) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.purchaseToken != null) {
            properties["purchaseToken"] = this.purchaseToken;
        }
        return properties;
    }
}
exports.default = GooglePlayVerifyReceiptEvent;
//# sourceMappingURL=GooglePlayVerifyReceiptEvent.js.map