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
import UnleashIndividualMaterialSetting from "./UnleashIndividualMaterialSetting";
import UnleashQuantityMaterialSetting from "./UnleashQuantityMaterialSetting";
import UnleashMaterial from "./UnleashMaterial";
import UnleashRecipe from "./UnleashRecipe";
import { UnleashRateEntryModelOptions } from "./options/UnleashRateEntryModelOptions";
import { UnleashRateEntryModelTypeIsSimpleOptions } from "./options/UnleashRateEntryModelTypeIsSimpleOptions";
import { UnleashRateEntryModelTypeIsRecipeOptions } from "./options/UnleashRateEntryModelTypeIsRecipeOptions";
import { UnleashRateEntryModelType } from "./enums/UnleashRateEntryModelType";

export default class UnleashRateEntryModel {
    private readonly gradeValue: number;
    private readonly type: UnleashRateEntryModelType;
    private readonly needCount: number|null = null;
    private readonly recipes: UnleashRecipe[]|null = null;

    public constructor(
        gradeValue: number,
        type: UnleashRateEntryModelType,
        options: UnleashRateEntryModelOptions|null = null,
    ) {
        this.gradeValue = gradeValue;
        this.type = type;
        this.needCount = options?.needCount ?? null;
        this.recipes = options?.recipes ?? null;
    }

    public static typeIsSimple(
        gradeValue: number,
        needCount: number,
        options: UnleashRateEntryModelTypeIsSimpleOptions|null = null,
    ): UnleashRateEntryModel {
        return new UnleashRateEntryModel(
            gradeValue,
            UnleashRateEntryModelType.SIMPLE,
            {
                needCount: needCount,
            },
        );
    }

    public static typeIsRecipe(
        gradeValue: number,
        recipes: UnleashRecipe[],
        options: UnleashRateEntryModelTypeIsRecipeOptions|null = null,
    ): UnleashRateEntryModel {
        return new UnleashRateEntryModel(
            gradeValue,
            UnleashRateEntryModelType.RECIPE,
            {
                recipes: recipes,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.gradeValue != null) {
            properties["gradeValue"] = this.gradeValue;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.needCount != null) {
            properties["needCount"] = this.needCount;
        }
        if (this.recipes != null) {
            properties["recipes"] = this.recipes.map(v => v.properties(
                ));
        }

        return properties;
    }
}
