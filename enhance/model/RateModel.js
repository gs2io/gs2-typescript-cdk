"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RateModel {
    constructor(name, targetInventoryModelId, acquireExperienceSuffix, materialInventoryModelId, experienceModelId, options = null) {
        var _a, _b, _c, _d;
        this.description = null;
        this.metadata = null;
        this.acquireExperienceHierarchy = null;
        this.bonusRates = null;
        this.name = name;
        this.targetInventoryModelId = targetInventoryModelId;
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        this.materialInventoryModelId = materialInventoryModelId;
        this.experienceModelId = experienceModelId;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
        this.acquireExperienceHierarchy = (_c = options === null || options === void 0 ? void 0 : options.acquireExperienceHierarchy) !== null && _c !== void 0 ? _c : null;
        this.bonusRates = (_d = options === null || options === void 0 ? void 0 : options.bonusRates) !== null && _d !== void 0 ? _d : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.description != null) {
            properties["description"] = this.description;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.targetInventoryModelId != null) {
            properties["targetInventoryModelId"] = this.targetInventoryModelId;
        }
        if (this.acquireExperienceSuffix != null) {
            properties["acquireExperienceSuffix"] = this.acquireExperienceSuffix;
        }
        if (this.materialInventoryModelId != null) {
            properties["materialInventoryModelId"] = this.materialInventoryModelId;
        }
        if (this.acquireExperienceHierarchy != null) {
            properties["acquireExperienceHierarchy"] = this.acquireExperienceHierarchy;
        }
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        if (this.bonusRates != null) {
            properties["bonusRates"] = this.bonusRates.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = RateModel;
//# sourceMappingURL=RateModel.js.map