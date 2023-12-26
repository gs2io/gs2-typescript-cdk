"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GradeEntryModel {
    constructor(rankCapValue, gradeUpPropertyIdRegex, options = null) {
        var _a, _b;
        this.metadata = null;
        this.propertyIdRegex = null;
        this.rankCapValue = rankCapValue;
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.propertyIdRegex = (_b = options === null || options === void 0 ? void 0 : options.propertyIdRegex) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.rankCapValue != null) {
            properties["rankCapValue"] = this.rankCapValue;
        }
        if (this.propertyIdRegex != null) {
            properties["propertyIdRegex"] = this.propertyIdRegex;
        }
        if (this.gradeUpPropertyIdRegex != null) {
            properties["gradeUpPropertyIdRegex"] = this.gradeUpPropertyIdRegex;
        }
        return properties;
    }
}
exports.default = GradeEntryModel;
//# sourceMappingURL=GradeEntryModel.js.map