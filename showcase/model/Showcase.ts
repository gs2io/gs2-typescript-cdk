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
import DisplayItem from "../model/DisplayItem";

import ShowcaseRef from "../ref/ShowcaseRef";

export interface ShowcaseOptions {
    metadata?: string|null|undefined;
    salesPeriodEventId?: string|null|undefined;
}


export default class Showcase {
	private readonly name: string;
    private readonly metadata: string|null = null;
    private readonly salesPeriodEventId: string|null = null;
	private readonly displayItems: DisplayItem[];

    public constructor(
            name: string,
            displayItems: DisplayItem[],
            options?: ShowcaseOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.salesPeriodEventId = options?.salesPeriodEventId ?? null;
        this.displayItems = displayItems;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        if (this.displayItems != null) {
            properties["DisplayItems"] = this.displayItems.map(v => v.properties());
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): ShowcaseRef {
        return new ShowcaseRef(
            namespaceName,
            this.name,
        );
    }
}
