"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransactionSettingV2 {
    constructor(distributorNamespaceId, enableParallelExecution, options = null) {
        this.distributorNamespaceId = distributorNamespaceId;
        this.enableParallelExecution = enableParallelExecution;
    }
    properties() {
        let properties = {};
        if (this.distributorNamespaceId != null) {
            properties["distributorNamespaceId"] = this.distributorNamespaceId;
        }
        if (this.enableParallelExecution != null) {
            properties["enableParallelExecution"] = this.enableParallelExecution;
        }
        return properties;
    }
}
exports.default = TransactionSettingV2;
//# sourceMappingURL=TransactionSettingV2.js.map