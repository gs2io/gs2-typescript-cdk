"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnleashRateModel {
    constructor(name, targetInventoryModelId, gradeModelId, gradeEntries, options = null) {
        var _a, _b, _c;
        this.description = null;
        this.metadata = null;
        this.groupKeyHierarchy = null;
        this.name = name;
        this.targetInventoryModelId = targetInventoryModelId;
        this.gradeModelId = gradeModelId;
        this.gradeEntries = gradeEntries;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
        this.groupKeyHierarchy = (_c = options === null || options === void 0 ? void 0 : options.groupKeyHierarchy) !== null && _c !== void 0 ? _c : null;
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
        if (this.gradeModelId != null) {
            properties["gradeModelId"] = this.gradeModelId;
        }
        if (this.groupKeyHierarchy != null) {
            properties["groupKeyHierarchy"] = this.groupKeyHierarchy;
        }
        if (this.gradeEntries != null) {
            properties["gradeEntries"] = this.gradeEntries.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = UnleashRateModel;
//# sourceMappingURL=UnleashRateModel.js.map