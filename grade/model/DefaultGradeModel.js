"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultGradeModel {
    constructor(propertyIdRegex, defaultGradeValue, options = null) {
        this.propertyIdRegex = propertyIdRegex;
        this.defaultGradeValue = defaultGradeValue;
    }
    properties() {
        let properties = {};
        if (this.propertyIdRegex != null) {
            properties["propertyIdRegex"] = this.propertyIdRegex;
        }
        if (this.defaultGradeValue != null) {
            properties["defaultGradeValue"] = this.defaultGradeValue;
        }
        return properties;
    }
}
exports.default = DefaultGradeModel;
//# sourceMappingURL=DefaultGradeModel.js.map