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
import { UnleashQuantityMaterialSettingOptions } from "./options/UnleashQuantityMaterialSettingOptions";
import { UnleashQuantityMaterialSettingMatchTypeIsSameGroupOptions } from "./options/UnleashQuantityMaterialSettingMatchTypeIsSameGroupOptions";
import { UnleashQuantityMaterialSettingMatchTypeIsSpecifiedOptions } from "./options/UnleashQuantityMaterialSettingMatchTypeIsSpecifiedOptions";
import { UnleashQuantityMaterialSettingMatchType } from "./enums/UnleashQuantityMaterialSettingMatchType";

export default class UnleashQuantityMaterialSetting {
    private readonly matchType: UnleashQuantityMaterialSettingMatchType;
    private readonly count: number;
    private readonly materialInventoryModelId: string|null = null;
    private readonly itemModelId: string|null = null;

    public constructor(
        matchType: UnleashQuantityMaterialSettingMatchType,
        count: number,
        options: UnleashQuantityMaterialSettingOptions|null = null,
    ) {
        this.matchType = matchType;
        this.count = count;
        this.materialInventoryModelId = options?.materialInventoryModelId ?? null;
        this.itemModelId = options?.itemModelId ?? null;
    }

    public static matchTypeIsSameGroup(
        count: number,
        materialInventoryModelId: string,
        options: UnleashQuantityMaterialSettingMatchTypeIsSameGroupOptions|null = null,
    ): UnleashQuantityMaterialSetting {
        return new UnleashQuantityMaterialSetting(
            UnleashQuantityMaterialSettingMatchType.SAME_GROUP,
            count,
            {
                materialInventoryModelId: materialInventoryModelId,
            },
        );
    }

    public static matchTypeIsSpecified(
        count: number,
        itemModelId: string,
        options: UnleashQuantityMaterialSettingMatchTypeIsSpecifiedOptions|null = null,
    ): UnleashQuantityMaterialSetting {
        return new UnleashQuantityMaterialSetting(
            UnleashQuantityMaterialSettingMatchType.SPECIFIED,
            count,
            {
                itemModelId: itemModelId,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.matchType != null) {
            properties["matchType"] = this.matchType;
        }
        if (this.materialInventoryModelId != null) {
            properties["materialInventoryModelId"] = this.materialInventoryModelId;
        }
        if (this.itemModelId != null) {
            properties["itemModelId"] = this.itemModelId;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }

        return properties;
    }
}
