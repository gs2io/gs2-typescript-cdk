"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CalculatedAt {
    constructor(categoryName, calculatedAt, options = null) {
        this.categoryName = categoryName;
        this.calculatedAt = calculatedAt;
    }
    properties() {
        let properties = {};
        if (this.categoryName != null) {
            properties["categoryName"] = this.categoryName;
        }
        if (this.calculatedAt != null) {
            properties["calculatedAt"] = this.calculatedAt;
        }
        return properties;
    }
}
exports.default = CalculatedAt;
//# sourceMappingURL=CalculatedAt.js.map