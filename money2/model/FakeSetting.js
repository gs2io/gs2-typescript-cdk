"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FakeSetting {
    constructor(acceptFakeReceipt, options = null) {
        this.acceptFakeReceipt = acceptFakeReceipt;
    }
    properties() {
        let properties = {};
        if (this.acceptFakeReceipt != null) {
            properties["acceptFakeReceipt"] = this.acceptFakeReceipt;
        }
        return properties;
    }
}
exports.default = FakeSetting;
//# sourceMappingURL=FakeSetting.js.map