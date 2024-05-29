"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OverrideBuffRate {
    constructor(name, rate, options = null) {
        this.name = name;
        this.rate = rate;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.rate != null) {
            properties["rate"] = this.rate;
        }
        return properties;
    }
}
exports.default = OverrideBuffRate;
//# sourceMappingURL=OverrideBuffRate.js.map