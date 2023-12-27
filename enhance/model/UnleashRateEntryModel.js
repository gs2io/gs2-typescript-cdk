"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnleashRateEntryModel {
    constructor(gradeValue, needCount, options = null) {
        this.gradeValue = gradeValue;
        this.needCount = needCount;
    }
    properties() {
        let properties = {};
        if (this.gradeValue != null) {
            properties["gradeValue"] = this.gradeValue;
        }
        if (this.needCount != null) {
            properties["needCount"] = this.needCount;
        }
        return properties;
    }
}
exports.default = UnleashRateEntryModel;
//# sourceMappingURL=UnleashRateEntryModel.js.map