"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BonusRate {
    constructor(rate, weight, options = null) {
        this.rate = rate;
        this.weight = weight;
    }
    properties() {
        let properties = {};
        if (this.rate != null) {
            properties["rate"] = this.rate;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }
        return properties;
    }
}
exports.default = BonusRate;
//# sourceMappingURL=BonusRate.js.map