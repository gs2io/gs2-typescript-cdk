"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcquireCount {
    constructor(itemName, count, options = null) {
        this.itemName = itemName;
        this.count = count;
    }
    properties() {
        let properties = {};
        if (this.itemName != null) {
            properties["itemName"] = this.itemName;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = AcquireCount;
//# sourceMappingURL=AcquireCount.js.map