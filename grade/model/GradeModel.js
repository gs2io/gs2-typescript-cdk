"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GradeModel {
    constructor(name, experienceModelId, gradeEntries, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.defaultGrades = null;
        this.acquireActionRates = null;
        this.name = name;
        this.experienceModelId = experienceModelId;
        this.gradeEntries = gradeEntries;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.defaultGrades = (_b = options === null || options === void 0 ? void 0 : options.defaultGrades) !== null && _b !== void 0 ? _b : null;
        this.acquireActionRates = (_c = options === null || options === void 0 ? void 0 : options.acquireActionRates) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.defaultGrades != null) {
            properties["defaultGrades"] = this.defaultGrades.map(v => v.properties());
        }
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        if (this.gradeEntries != null) {
            properties["gradeEntries"] = this.gradeEntries.map(v => v.properties());
        }
        if (this.acquireActionRates != null) {
            properties["acquireActionRates"] = this.acquireActionRates.map(v => v.properties());
        }
        return properties;
    }
}
exports.default = GradeModel;
//# sourceMappingURL=GradeModel.js.map