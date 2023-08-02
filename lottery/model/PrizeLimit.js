"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrizeLimit {
    constructor(prizeId, drawnCount, options = null) {
        this.prizeId = prizeId;
        this.drawnCount = drawnCount;
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