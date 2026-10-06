/*
 * Copyright 2016- Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { UnleashIndividualMaterialSettingOptions } from "./options/UnleashIndividualMaterialSettingOptions";
import { UnleashIndividualMaterialSettingGradeConditionIsAnyOptions } from "./options/UnleashIndividualMaterialSettingGradeConditionIsAnyOptions";
import { UnleashIndividualMaterialSettingGradeConditionIsSameAsTargetOptions } from "./options/UnleashIndividualMaterialSettingGradeConditionIsSameAsTargetOptions";
import { UnleashIndividualMaterialSettingGradeConditionIsEqualOptions } from "./options/UnleashIndividualMaterialSettingGradeConditionIsEqualOptions";
import { UnleashIndividualMaterialSettingMatchType } from "./enums/UnleashIndividualMaterialSettingMatchType";
import { UnleashIndividualMaterialSettingGradeCondition } from "./enums/UnleashIndividualMaterialSettingGradeCondition";

export default class UnleashIndividualMaterialSetting {
    private readonly matchType: UnleashIndividualMaterialSettingMatchType;
    private readonly gradeCondition: UnleashIndividualMaterialSettingGradeCondition;
    private readonly count: number;
    private readonly gradeValue: number|null = null;

    public constructor(
        matchType: UnleashIndividualMaterialSettingMatchType,
        gradeCondition: UnleashIndividualMaterialSettingGradeCondition,
        count: number,
        options: UnleashIndividualMaterialSettingOptions|null = null,
    ) {
        this.matchType = matchType;
        this.gradeCondition = gradeCondition;
        this.count = count;
        this.gradeValue = options?.gradeValue ?? null;
    }

    public static gradeConditionIsAny(
        matchType: UnleashIndividualMaterialSettingMatchType,
        count: number,
        options: UnleashIndividualMaterialSettingGradeConditionIsAnyOptions|null = null,
    ): UnleashIndividualMaterialSetting {
        return new UnleashIndividualMaterialSetting(
            matchType,
            UnleashIndividualMaterialSettingGradeCondition.ANY,
            count,
            {
            },
        );
    }

    public static gradeConditionIsSameAsTarget(
        matchType: UnleashIndividualMaterialSettingMatchType,
        count: number,
        options: UnleashIndividualMaterialSettingGradeConditionIsSameAsTargetOptions|null = null,
    ): UnleashIndividualMaterialSetting {
        return new UnleashIndividualMaterialSetting(
            matchType,
            UnleashIndividualMaterialSettingGradeCondition.SAME_AS_TARGET,
            count,
            {
            },
        );
    }

    public static gradeConditionIsEqual(
        matchType: UnleashIndividualMaterialSettingMatchType,
        count: number,
        gradeValue: number,
        options: UnleashIndividualMaterialSettingGradeConditionIsEqualOptions|null = null,
    ): UnleashIndividualMaterialSetting {
        return new UnleashIndividualMaterialSetting(
            matchType,
            UnleashIndividualMaterialSettingGradeCondition.EQUAL,
            count,
            {
                gradeValue: gradeValue,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

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
