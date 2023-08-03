"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RarityParameterCountModel {
    constructor(count, weight, options = null) {
        this.count = count;
        this.weight = weight;
    }
    properties() {
        let properties = {};
        if (this.count != null) {
            properties["count"] = this.count;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = RarityParameterCountModel;
//# sourceMappingURL=RarityParameterCountModel.js.map