"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExperienceModel {
    constructor(name, defaultExperience, defaultRankCap, maxRankCap, rankThreshold, options = null) {
        var _a, _b;
        this.metadata = null;
        this.acquireActionRates = null;
        this.name = name;
        this.defaultExperience = defaultExperience;
        this.defaultRankCap = defaultRankCap;
        this.maxRankCap = maxRankCap;
        this.rankThreshold = rankThreshold;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.acquireActionRates = (_b = options === null || options === void 0 ? void 0 : options.acquireActionRates) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        var _a;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.defaultExperience != null) {
            properties["defaultExperience"] = this.defaultExperience;
        }
        if (this.defaultRankCap != null) {
            properties["defaultRankCap"] = this.defaultRankCap;
        }
        if (this.maxRankCap != null) {
            properties["maxRankCap"] = this.maxRankCap;
        }
        if (this.rankThreshold != null) {
            properties["rankThreshold"] = (_a = this.rankThreshold) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.acquireActionRates != null) {
            properties["acquireActionRates"] = this.acquireActionRates.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = ExperienceModel;
//# sourceMappingURL=ExperienceModel.js.map