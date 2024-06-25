"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WalletSummary {
    constructor(paid, free, total, options = null) {
        this.paid = paid;
        this.free = free;
        this.total = total;
    }
    properties() {
        let properties = {};
        if (this.paid != null) {
            properties["paid"] = this.paid;
        }
        if (this.free != null) {
            properties["free"] = this.free;
        }
        if (this.total != null) {
            properties["total"] = this.total;
        }
        return properties;
    }
}
exports.default = WalletSummary;
//# sourceMappingURL=WalletSummary.js.map