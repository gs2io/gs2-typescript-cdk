"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppleAppStoreSubscriptionContent {
    constructor(options = null) {
        var _a;
        this.subscriptionGroupIdentifier = null;
        this.subscriptionGroupIdentifier = (_a = options === null || options === void 0 ? void 0 : options.subscriptionGroupIdentifier) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.subscriptionGroupIdentifier != null) {
            properties["subscriptionGroupIdentifier"] = this.subscriptionGroupIdentifier;
        }
        return properties;
    }
}
exports.default = AppleAppStoreSubscriptionContent;
//# sourceMappingURL=AppleAppStoreSubscriptionContent.js.map