"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FixedTiming {
    constructor(options = null) {
        var _a, _b;
        this.hour = null;
        this.minute = null;
        this.hour = (_a = options === null || options === void 0 ? void 0 : options.hour) !== null && _a !== void 0 ? _a : null;
        this.minute = (_b = options === null || options === void 0 ? void 0 : options.minute) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.hour != null) {
            properties["hour"] = this.hour;
        }
        if (this.minute != null) {
            properties["minute"] = this.minute;
        }
        return properties;
    }
}
exports.default = FixedTiming;
//# sourceMappingURL=FixedTiming.js.map