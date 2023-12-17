"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutoRunTransactionSetting {
    constructor(distributorNamespaceId, options = null) {
        var _a;
        this.queueNamespaceId = null;
        this.distributorNamespaceId = distributorNamespaceId;
        this.queueNamespaceId = (_a = options === null || options === void 0 ? void 0 : options.queueNamespaceId) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.distributorNamespaceId != null) {
            properties["distributorNamespaceId"] = this.distributorNamespaceId;
        }
        if (this.queueNamespaceId != null) {
            properties["queueNamespaceId"] = this.queueNamespaceId;
        }
        return properties;
    }
}
exports.default = AutoRunTransactionSetting;
//# sourceMappingURL=AutoRunTransactionSetting.js.map