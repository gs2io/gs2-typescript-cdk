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
import { UnleashRecipeOptions } from "./options/UnleashRecipeOptions";

export default class UnleashRecipe {
    private readonly name: string;
    private readonly materials: UnleashMaterial[];
    private readonly metadata: string|null = null;
    private readonly targetGroupKeys: string[]|null = null;

    public constructor(
        name: string,
        materials: UnleashMaterial[],
        options: UnleashRecipeOptions|null = null,
    ) {
        this.name = name;
        this.materials = materials;
        this.metadata = options?.metadata ?? null;
        this.targetGroupKeys = options?.targetGroupKeys ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.targetGroupKeys != null) {
            properties["targetGroupKeys"] = this.targetGroupKeys;
        }
        if (this.materials != null) {
            properties["materials"] = this.materials.map(v => v.properties(
                ));
        }

        return properties;
    }
}
