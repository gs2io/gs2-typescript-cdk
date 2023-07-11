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
import ItemModel from "./ItemModel";
import { InventoryModelOptions } from "./options/InventoryModelOptions";

export default class InventoryModel {
    private readonly name: string;
    private readonly initialCapacity: number;
    private readonly maxCapacity: number;
    private readonly itemModels: ItemModel[];
    private readonly metadata: string|null = null;
    private readonly protectReferencedItem: boolean|null = null;

    public constructor(
        name: string,
        initialCapacity: number,
        maxCapacity: number,
        itemModels: ItemModel[],
        options: InventoryModelOptions|null = null,
    ) {
        this.name = name;
        this.initialCapacity = initialCapacity;
        this.maxCapacity = maxCapacity;
        this.itemModels = itemModels;
        this.metadata = options?.metadata ?? null;
        this.protectReferencedItem = options?.protectReferencedItem ?? null;
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
        if (this.initialCapacity != null) {
            properties["initialCapacity"] = this.initialCapacity;
        }
        if (this.maxCapacity != null) {
            properties["maxCapacity"] = this.maxCapacity;
        }
        if (this.protectReferencedItem != null) {
            properties["protectReferencedItem"] = this.protectReferencedItem;
        }
        if (this.itemModels != null) {
            properties["itemModels"] = this.itemModels.map(v => v.properties(
                ));
        }

        return properties;
    }
}
