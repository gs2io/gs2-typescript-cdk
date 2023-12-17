"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomUsed {
    constructor(category, used, options = null) {
        this.category = category;
        this.used = used;
    }
    properties() {
        let properties = {};
        if (this.category != null) {
            properties["category"] = this.category;
        }
        if (this.used != null) {
            properties["used"] = this.used;
        }
        return properties;
    }
}
exports.default = RandomUsed;
//# sourceMappingURL=RandomUsed.js.map