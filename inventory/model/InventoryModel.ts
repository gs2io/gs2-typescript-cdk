/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
import ItemModel from "../model/ItemModel";

import InventoryModelRef from "../ref/InventoryModelRef";

export interface InventoryModelOptions {
    metadata?: string|null|undefined;
    protectReferencedItem?: boolean|null|undefined;
    itemModels?: ItemModel[]|null|undefined;
}


export default class InventoryModel {
	private readonly name: string;
    private readonly metadata: string|null = null;
	private readonly initialCapacity: number;
	private readonly maxCapacity: number;
    private readonly protectReferencedItem: boolean|null = null;
    private readonly itemModels: ItemModel[]|null = null;

    public constructor(
            name: string,
            initialCapacity: number,
            maxCapacity: number,
            options?: InventoryModelOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.initialCapacity = initialCapacity;
        this.maxCapacity = maxCapacity;
        this.protectReferencedItem = options?.protectReferencedItem ?? null;
        this.itemModels = options?.itemModels ?? null;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.initialCapacity != null) {
            properties["InitialCapacity"] = this.initialCapacity;
        }
        if (this.maxCapacity != null) {
            properties["MaxCapacity"] = this.maxCapacity;
        }
        if (this.protectReferencedItem != null) {
            properties["ProtectReferencedItem"] = this.protectReferencedItem;
        }
        if (this.itemModels != null) {
            properties["ItemModels"] = this.itemModels.map(v => v.properties());
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): InventoryModelRef {
        return new InventoryModelRef(
            namespaceName,
            this.name,
        );
    }
}
