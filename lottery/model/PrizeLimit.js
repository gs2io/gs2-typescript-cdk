"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrizeLimit {
    constructor(prizeId, drawnCount, createdAt, updatedAt, options = null) {
        this.prizeId = prizeId;
        this.drawnCount = drawnCount;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    properties() {
        let properties = {};
        if (this.prizeId != null) {
            properties["prizeId"] = this.prizeId;
        }
        if (this.drawnCount != null) {
            properties["drawnCount"] = this.drawnCount;
        }
        if (this.createdAt != null) {
            properties["createdAt"] = this.createdAt;
        }
        if (this.updatedAt != null) {
            properties["updatedAt"] = this.updatedAt;
        }
        return properties;
    }
}
exports.default = PrizeLimit;
//# sourceMappingURL=PrizeLimit.js.map