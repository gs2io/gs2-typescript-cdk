"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcquireActionRate {
    constructor(name, rates, options = null) {
        this.name = name;
        this.rates = rates;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.rates != null) {
            properties["rates"] = this.rates;
        }
        return properties;
    }
}
exports.default = AcquireActionRate;
//# sourceMappingURL=AcquireActionRate.js.map