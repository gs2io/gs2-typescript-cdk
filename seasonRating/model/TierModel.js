"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TierModel {
    constructor(raiseRankBonus, entryFee, minimumChangePoint, maximumChangePoint, options = null) {
        var _a;
        this.metadata = null;
        this.raiseRankBonus = raiseRankBonus;
        this.entryFee = entryFee;
        this.minimumChangePoint = minimumChangePoint;
        this.maximumChangePoint = maximumChangePoint;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.raiseRankBonus != null) {
            properties["raiseRankBonus"] = this.raiseRankBonus;
        }
        if (this.entryFee != null) {
            properties["entryFee"] = this.entryFee;
        }
        if (this.minimumChangePoint != null) {
            properties["minimumChangePoint"] = this.minimumChangePoint;
        }
        if (this.maximumChangePoint != null) {
            properties["maximumChangePoint"] = this.maximumChangePoint;
        }
        return properties;
    }
}
exports.default = TierModel;
//# sourceMappingURL=TierModel.js.map