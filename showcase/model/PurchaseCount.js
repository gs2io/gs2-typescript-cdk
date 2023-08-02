"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PurchaseCount {
    constructor(name, count, options = null) {
        this.name = name;
        this.count = count;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = PurchaseCount;
//# sourceMappingURL=PurchaseCount.js.map