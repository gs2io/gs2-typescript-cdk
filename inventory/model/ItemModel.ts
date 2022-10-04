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

import ItemModelRef from "../ref/ItemModelRef";

export interface ItemModelOptions {
    metadata?: string|null|undefined;
}


export default class ItemModel {
	private readonly name: string;
    private readonly metadata: string|null = null;
	private readonly stackingLimit: number;
	private readonly allowMultipleStacks: boolean;
	private readonly sortValue: number;

    public constructor(
            name: string,
            stackingLimit: number,
            allowMultipleStacks: boolean,
            sortValue: number,
            options?: ItemModelOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.stackingLimit = stackingLimit;
        this.allowMultipleStacks = allowMultipleStacks;
        this.sortValue = sortValue;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
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
    ): ItemModelRef {
        return new ItemModelRef(
            namespaceName,
            inventoryName,
            this.name,
        );
    }
}
