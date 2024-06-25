"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyReceiptEvent {
    constructor(contentName, platform, options = null) {
        var _a, _b;
        this.appleAppStoreVerifyReceiptEvent = null;
        this.googlePlayVerifyReceiptEvent = null;
        this.contentName = contentName;
        this.platform = platform;
        this.appleAppStoreVerifyReceiptEvent = (_a = options === null || options === void 0 ? void 0 : options.appleAppStoreVerifyReceiptEvent) !== null && _a !== void 0 ? _a : null;
        this.googlePlayVerifyReceiptEvent = (_b = options === null || options === void 0 ? void 0 : options.googlePlayVerifyReceiptEvent) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.contentName != null) {
            properties["contentName"] = this.contentName;
        }
        if (this.platform != null) {
            properties["platform"] = this.platform;
        }
        if (this.appleAppStoreVerifyReceiptEvent != null) {
            properties["appleAppStoreVerifyReceiptEvent"] = (_a = this.appleAppStoreVerifyReceiptEvent) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.googlePlayVerifyReceiptEvent != null) {
            properties["googlePlayVerifyReceiptEvent"] = (_b = this.googlePlayVerifyReceiptEvent) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = VerifyReceiptEvent;
//# sourceMappingURL=VerifyReceiptEvent.js.map