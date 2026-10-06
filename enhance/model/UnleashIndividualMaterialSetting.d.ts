import { UnleashIndividualMaterialSettingOptions } from "./options/UnleashIndividualMaterialSettingOptions";
import { UnleashIndividualMaterialSettingGradeConditionIsAnyOptions } from "./options/UnleashIndividualMaterialSettingGradeConditionIsAnyOptions";
import { UnleashIndividualMaterialSettingGradeConditionIsSameAsTargetOptions } from "./options/UnleashIndividualMaterialSettingGradeConditionIsSameAsTargetOptions";
import { UnleashIndividualMaterialSettingGradeConditionIsEqualOptions } from "./options/UnleashIndividualMaterialSettingGradeConditionIsEqualOptions";
import { UnleashIndividualMaterialSettingMatchType } from "./enums/UnleashIndividualMaterialSettingMatchType";
import { UnleashIndividualMaterialSettingGradeCondition } from "./enums/UnleashIndividualMaterialSettingGradeCondition";
export default class UnleashIndividualMaterialSetting {
    private readonly matchType;
    private readonly gradeCondition;
    private readonly count;
    private readonly gradeValue;
    constructor(matchType: UnleashIndividualMaterialSettingMatchType, gradeCondition: UnleashIndividualMaterialSettingGradeCondition, count: number, options?: UnleashIndividualMaterialSettingOptions | null);
    static gradeConditionIsAny(matchType: UnleashIndividualMaterialSettingMatchType, count: number, options?: UnleashIndividualMaterialSettingGradeConditionIsAnyOptions | null): UnleashIndividualMaterialSetting;
    static gradeConditionIsSameAsTarget(matchType: UnleashIndividualMaterialSettingMatchType, count: number, options?: UnleashIndividualMaterialSettingGradeConditionIsSameAsTargetOptions | null): UnleashIndividualMaterialSetting;
    static gradeConditionIsEqual(matchType: UnleashIndividualMaterialSettingMatchType, count: number, gradeValue: number, options?: UnleashIndividualMaterialSettingGradeConditionIsEqualOptions | null): UnleashIndividualMaterialSetting;
    properties(): {
        [name: string]: any;
    };
}
