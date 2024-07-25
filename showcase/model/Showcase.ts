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
import { VerifyAction } from "../../core/model";
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import SalesItem from "./SalesItem";
import SalesItemGroup from "./SalesItemGroup";
import DisplayItem from "./DisplayItem";
import { ShowcaseOptions } from "./options/ShowcaseOptions";

export default class Showcase {
    private readonly name: string;
    private readonly displayItems: DisplayItem[];
    private readonly metadata: string|null = null;
    private readonly salesPeriodEventId: string|null = null;

    public constructor(
        name: string,
        displayItems: DisplayItem[],
        options: ShowcaseOptions|null = null,
    ) {
        this.name = name;
        this.displayItems = displayItems;
        this.metadata = options?.metadata ?? null;
        this.salesPeriodEventId = options?.salesPeriodEventId ?? null;
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
        if (this.salesPeriodEventId != null) {
            properties["salesPeriodEventId"] = this.salesPeriodEventId;
        }
        if (this.displayItems != null) {
            properties["displayItems"] = this.displayItems.map(v => v.properties(
                ));
        }

        return properties;
    }
}
