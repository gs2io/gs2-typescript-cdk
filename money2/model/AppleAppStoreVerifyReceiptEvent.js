"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppleAppStoreVerifyReceiptEvent {
    constructor(environment, options = null) {
        this.environment = environment;
    }
    properties() {
        let properties = {};
        if (this.environment != null) {
            properties["environment"] = this.environment;
        }
        return properties;
    }
}
exports.default = AppleAppStoreVerifyReceiptEvent;
//# sourceMappingURL=AppleAppStoreVerifyReceiptEvent.js.map