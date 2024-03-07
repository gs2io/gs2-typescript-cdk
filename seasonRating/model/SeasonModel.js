"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SeasonModel {
    constructor(name, tiers, experienceModelId, options = null) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.tiers = tiers;
        this.experienceModelId = experienceModelId;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.tiers != null) {
            properties["tiers"] = this.tiers.map(v => v.properties());
        }
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        return properties;
    }
}
exports.default = SeasonModel;
//# sourceMappingURL=SeasonModel.js.map