"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GradeEntryModel {
    constructor(rankCapValue, propertyIdRegex, gradeUpPropertyIdRegex, options = null) {
        var _a;
        this.metadata = null;
        this.rankCapValue = rankCapValue;
        this.propertyIdRegex = propertyIdRegex;
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
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