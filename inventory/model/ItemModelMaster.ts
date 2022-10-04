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

import core from "../../core";
import {GetAttr} from "../../core/func";
import {Stack} from "../../core/model";

import ItemModelMasterRef from "../ref/ItemModelMasterRef";

export interface ItemModelMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
}

export default class ItemModelMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly inventoryName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly stackingLimit: number;
	private readonly allowMultipleStacks: boolean;
	private readonly sortValue: number;

    public constructor(
            stack: Stack,
            namespaceName: string,
            inventoryName: string,
            name: string,
            stackingLimit: number,
            allowMultipleStacks: boolean,
            sortValue: number,
            options?: ItemModelMasterOptions,
    ) {
        super("Inventory_ItemModelMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.stackingLimit = stackingLimit;
        this.allowMultipleStacks = allowMultipleStacks;
        this.sortValue = sortValue;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Inventory::ItemModelMaster";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.inventoryName != null) {
            properties["InventoryName"] = this.inventoryName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.stackingLimit != null) {
            properties["StackingLimit"] = this.stackingLimit;
        }
        if (this.allowMultipleStacks != null) {
            properties["AllowMultipleStacks"] = this.allowMultipleStacks;
        }
        if (this.sortValue != null) {
            properties["SortValue"] = this.sortValue;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
            inventoryName: string,
    ): ItemModelMasterRef {
        return new ItemModelMasterRef(
            namespaceName,
            inventoryName,
            this.name,
        );
    }

    public getAttrItemModelId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.ItemModelId"
        );
    }
}
