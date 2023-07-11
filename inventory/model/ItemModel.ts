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
import { ItemModelOptions } from "./options/ItemModelOptions";

export default class ItemModel {
    private readonly name: string;
    private readonly stackingLimit: number;
    private readonly allowMultipleStacks: boolean;
    private readonly sortValue: number;
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        stackingLimit: number,
        allowMultipleStacks: boolean,
        sortValue: number,
        options: ItemModelOptions|null = null,
    ) {
        this.name = name;
        this.stackingLimit = stackingLimit;
        this.allowMultipleStacks = allowMultipleStacks;
        this.sortValue = sortValue;
        this.metadata = options?.metadata ?? null;
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
        if (this.stackingLimit != null) {
            properties["stackingLimit"] = this.stackingLimit;
        }
        if (this.allowMultipleStacks != null) {
            properties["allowMultipleStacks"] = this.allowMultipleStacks;
        }
        if (this.sortValue != null) {
            properties["sortValue"] = this.sortValue;
        }

        return properties;
    }
}
