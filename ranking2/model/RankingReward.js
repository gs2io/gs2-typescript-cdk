"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RankingReward {
    constructor(thresholdRank, options = null) {
        var _a, _b;
        this.metadata = null;
        this.acquireActions = null;
        this.thresholdRank = thresholdRank;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.acquireActions = (_b = options === null || options === void 0 ? void 0 : options.acquireActions) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.thresholdRank != null) {
            properties["thresholdRank"] = this.thresholdRank;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = RankingReward;
//# sourceMappingURL=RankingReward.js.map