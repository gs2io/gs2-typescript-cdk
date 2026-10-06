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
import { UnleashMaterialOptions } from "./options/UnleashMaterialOptions";
import { UnleashMaterialMaterialTypeIsIndividualOptions } from "./options/UnleashMaterialMaterialTypeIsIndividualOptions";
import { UnleashMaterialMaterialTypeIsQuantityOptions } from "./options/UnleashMaterialMaterialTypeIsQuantityOptions";
import { UnleashMaterialMaterialType } from "./enums/UnleashMaterialMaterialType";

export default class UnleashMaterial {
    private readonly name: string;
    private readonly materialType: UnleashMaterialMaterialType;
    private readonly individualSetting: UnleashIndividualMaterialSetting|null = null;
    private readonly quantitySetting: UnleashQuantityMaterialSetting|null = null;

    public constructor(
        name: string,
        materialType: UnleashMaterialMaterialType,
        options: UnleashMaterialOptions|null = null,
    ) {
        this.name = name;
        this.materialType = materialType;
        this.individualSetting = options?.individualSetting ?? null;
        this.quantitySetting = options?.quantitySetting ?? null;
    }

    public static materialTypeIsIndividual(
        name: string,
        individualSetting: UnleashIndividualMaterialSetting,
        options: UnleashMaterialMaterialTypeIsIndividualOptions|null = null,
    ): UnleashMaterial {
        return new UnleashMaterial(
            name,
            UnleashMaterialMaterialType.INDIVIDUAL,
            {
                individualSetting: individualSetting,
            },
        );
    }

    public static materialTypeIsQuantity(
        name: string,
        quantitySetting: UnleashQuantityMaterialSetting,
        options: UnleashMaterialMaterialTypeIsQuantityOptions|null = null,
    ): UnleashMaterial {
        return new UnleashMaterial(
            name,
            UnleashMaterialMaterialType.QUANTITY,
            {
                quantitySetting: quantitySetting,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.materialType != null) {
            properties["materialType"] = this.materialType;
        }
        if (this.individualSetting != null) {
            properties["individualSetting"] = this.individualSetting?.properties(
            );
        }
        if (this.quantitySetting != null) {
            properties["quantitySetting"] = this.quantitySetting?.properties(
            );
        }

        return properties;
    }
}
