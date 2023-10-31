"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomStatus {
    constructor(seed, options = null) {
        var _a;
        this.used = null;
        this.seed = seed;
        this.used = (_a = options === null || options === void 0 ? void 0 : options.used) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.seed != null) {
            properties["seed"] = this.seed;
        }
        if (this.used != null) {
            properties["used"] = this.used.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = RandomStatus;
//# sourceMappingURL=RandomStatus.js.map