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
import BoxItem from "./BoxItem";

export interface BoxItemsOptions {
    items?: BoxItem[]|null|undefined;
}

export default class BoxItems {
	private readonly boxId: string;
	private readonly prizeTableName: string;
	private readonly userId: string;
    private readonly items: BoxItem[]|null = null;

    public constructor(
            boxId: string,
            prizeTableName: string,
            userId: string,
            options?: BoxItemsOptions,
    ) {
        this.boxId = boxId;
        this.prizeTableName = prizeTableName;
        this.userId = userId;
        this.items = options?.items ?? null;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.boxId != null) {
            properties["BoxId"] = this.boxId;
        }
        if (this.prizeTableName != null) {
            properties["PrizeTableName"] = this.prizeTableName;
        }
        if (this.userId != null) {
            properties["UserId"] = this.userId;
        }
        if (this.items != null) {
            properties["Items"] = this.items.map(v => v.properties());
        }
        return properties;
    }
}
