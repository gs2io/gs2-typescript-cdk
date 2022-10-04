"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Probability {
    constructor(prize, rate, options) {
        this.prize = prize;
        this.rate = rate;
    }
    properties() {
        let properties = {};
        if (this.prize != null) {
            properties["Prize"] = this.prize.properties();
        }
        if (this.rate != null) {
            properties["Rate"] = this.rate;
        }
        return properties;
    }
}
exports.default = Probability;
//# sourceMappingURL=Probability.js.map