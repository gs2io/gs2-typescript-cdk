"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrizeLimit {
    constructor(prizeId, drawnCount, options = null) {
        var _a;
        this.revision = null;
        this.prizeId = prizeId;
        this.drawnCount = drawnCount;
        this.revision = (_a = options === null || options === void 0 ? void 0 : options.revision) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.prizeId != null) {
            properties["prizeId"] = this.prizeId;
        }
        if (this.drawnCount != null) {
            properties["drawnCount"] = this.drawnCount;
        }
        return properties;
    }
}
exports.default = PrizeLimit;
//# sourceMappingURL=PrizeLimit.js.map