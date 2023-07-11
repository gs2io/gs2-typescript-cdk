"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WalletDetail {
    constructor(price, count, options = null) {
        this.price = price;
        this.count = count;
    }
    properties() {
        let properties = {};
        if (this.price != null) {
            properties["price"] = this.price;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = WalletDetail;
//# sourceMappingURL=WalletDetail.js.map