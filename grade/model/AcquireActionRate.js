"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AcquireActionRateMode_1 = require("./enum/AcquireActionRateMode");
class AcquireActionRate {
    constructor(name, mode, options = null) {
        var _a, _b;
        this.rates = null;
        this.bigRates = null;
        this.name = name;
        this.mode = mode;
        this.rates = (_a = options === null || options === void 0 ? void 0 : options.rates) !== null && _a !== void 0 ? _a : null;
        this.bigRates = (_b = options === null || options === void 0 ? void 0 : options.bigRates) !== null && _b !== void 0 ? _b : null;
    }
    static modeIsDouble(name, rates, options = null) {
        return new AcquireActionRate(name, AcquireActionRateMode_1.AcquireActionRateMode.DOUBLE, {
            rates: rates,
        });
    }
    static modeIsBig(name, bigRates, options = null) {
        return new AcquireActionRate(name, AcquireActionRateMode_1.AcquireActionRateMode.BIG, {
            bigRates: bigRates,
        });
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.mode != null) {
            properties["mode"] = this.mode;
        }
        if (this.rates != null) {
            properties["rates"] = this.rates;
        }
        if (this.bigRates != null) {
            properties["bigRates"] = this.bigRates;
        }
        return properties;
    }
}
exports.default = AcquireActionRate;
//# sourceMappingURL=AcquireActionRate.js.map