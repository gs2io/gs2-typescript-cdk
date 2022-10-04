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
import SalesItem from "./SalesItem";

export interface SalesItemGroupOptions {
    metadata?: string|null|undefined;
}

export default class SalesItemGroup {
	private readonly name: string;
    private readonly metadata: string|null = null;
	private readonly salesItems: SalesItem[];

    public constructor(
            name: string,
            salesItems: SalesItem[],
            options?: SalesItemGroupOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.salesItems = salesItems;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.salesItems != null) {
            properties["SalesItems"] = this.salesItems.map(v => v.properties());
        }
        return properties;
    }
}
