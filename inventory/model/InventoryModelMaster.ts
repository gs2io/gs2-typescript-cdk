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

import InventoryModelMasterRef from "../ref/InventoryModelMasterRef";

export interface InventoryModelMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
}

export default class InventoryModelMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly initialCapacity: number;
	private readonly maxCapacity: number;
	private readonly protectReferencedItem: boolean;

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            initialCapacity: number,
            maxCapacity: number,
            protectReferencedItem: boolean,
            options?: InventoryModelMasterOptions,
    ) {
        super("Inventory_InventoryModelMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.initialCapacity = initialCapacity;
        this.maxCapacity = maxCapacity;
        this.protectReferencedItem = protectReferencedItem;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Inventory::InventoryModelMaster";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
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
        if (this.initialCapacity != null) {
            properties["InitialCapacity"] = this.initialCapacity;
        }
        if (this.maxCapacity != null) {
            properties["MaxCapacity"] = this.maxCapacity;
        }
        if (this.protectReferencedItem != null) {
            properties["ProtectReferencedItem"] = this.protectReferencedItem;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): InventoryModelMasterRef {
        return new InventoryModelMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrInventoryModelId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.InventoryModelId"
        );
    }
}
