"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppleAppStoreContent {
    constructor(options = null) {
        var _a;
        this.productId = null;
        this.productId = (_a = options === null || options === void 0 ? void 0 : options.productId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.productId != null) {
            properties["productId"] = this.productId;
        }
        return properties;
    }
}
exports.default = AppleAppStoreContent;
//# sourceMappingURL=AppleAppStoreContent.js.map