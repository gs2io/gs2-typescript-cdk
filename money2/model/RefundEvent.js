"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RefundEvent {
    constructor(contentName, platform, options = null) {
        var _a, _b;
        this.appleAppStoreRefundEvent = null;
        this.googlePlayRefundEvent = null;
        this.contentName = contentName;
        this.platform = platform;
        this.appleAppStoreRefundEvent = (_a = options === null || options === void 0 ? void 0 : options.appleAppStoreRefundEvent) !== null && _a !== void 0 ? _a : null;
        this.googlePlayRefundEvent = (_b = options === null || options === void 0 ? void 0 : options.googlePlayRefundEvent) !== null && _b !== void 0 ? _b : null;
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
        if (this.appleAppStoreRefundEvent != null) {
            properties["appleAppStoreRefundEvent"] = (_a = this.appleAppStoreRefundEvent) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.googlePlayRefundEvent != null) {
            properties["googlePlayRefundEvent"] = (_b = this.googlePlayRefundEvent) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = RefundEvent;
//# sourceMappingURL=RefundEvent.js.map