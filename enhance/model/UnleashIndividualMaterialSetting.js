"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnleashIndividualMaterialSettingGradeCondition_1 = require("./enums/UnleashIndividualMaterialSettingGradeCondition");
class UnleashIndividualMaterialSetting {
    constructor(matchType, gradeCondition, count, options = null) {
        var _a;
        this.gradeValue = null;
        this.matchType = matchType;
        this.gradeCondition = gradeCondition;
        this.count = count;
        this.gradeValue = (_a = options === null || options === void 0 ? void 0 : options.gradeValue) !== null && _a !== void 0 ? _a : null;
    }
    static gradeConditionIsAny(matchType, count, options = null) {
        return new UnleashIndividualMaterialSetting(matchType, UnleashIndividualMaterialSettingGradeCondition_1.UnleashIndividualMaterialSettingGradeCondition.ANY, count, {});
    }
    static gradeConditionIsSameAsTarget(matchType, count, options = null) {
        return new UnleashIndividualMaterialSetting(matchType, UnleashIndividualMaterialSettingGradeCondition_1.UnleashIndividualMaterialSettingGradeCondition.SAME_AS_TARGET, count, {});
    }
    static gradeConditionIsEqual(matchType, count, gradeValue, options = null) {
        return new UnleashIndividualMaterialSetting(matchType, UnleashIndividualMaterialSettingGradeCondition_1.UnleashIndividualMaterialSettingGradeCondition.EQUAL, count, {
            gradeValue: gradeValue,
        });
    }
    properties() {
        let properties = {};
        if (this.matchType != null) {
            properties["matchType"] = this.matchType;
        }
        if (this.gradeCondition != null) {
            properties["gradeCondition"] = this.gradeCondition;
        }
        if (this.gradeValue != null) {
            properties["gradeValue"] = this.gradeValue;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
}
exports.default = UnleashIndividualMaterialSetting;
//# sourceMappingURL=UnleashIndividualMaterialSetting.js.map