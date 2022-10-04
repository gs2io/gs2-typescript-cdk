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
import SalesItem from "../model/SalesItem";
import SalesItemGroup from "../model/SalesItemGroup";

export const DisplayItemType = {
    SALES_ITEM: "salesItem",
    SALES_ITEM_GROUP: "salesItemGroup",
} as const;
export type DisplayItemType = typeof DisplayItemType[keyof typeof DisplayItemType];

import DisplayItemRef from "../ref/DisplayItemRef";

export interface DisplayItemOptions {
    salesItem?: SalesItem|null|undefined;
    salesItemGroup?: SalesItemGroup|null|undefined;
    salesPeriodEventId?: string|null|undefined;
}

export interface DisplayItemSalesItemOptions {
    salesItem?: SalesItem|null|undefined,
    salesPeriodEventId?: string|null|undefined,
}

export interface DisplayItemSalesItemGroupOptions {
    salesItemGroup?: SalesItemGroup|null|undefined,
    salesPeriodEventId?: string|null|undefined,
}


export default class DisplayItem {
	private readonly displayItemId: string;
	private readonly type: DisplayItemType;
    private readonly salesItem: SalesItem|null = null;
    private readonly salesItemGroup: SalesItemGroup|null = null;
    private readonly salesPeriodEventId: string|null = null;

    public constructor(
            displayItemId: string,
            type: DisplayItemType,
            options?: DisplayItemOptions,
    ) {
        this.displayItemId = displayItemId;
        this.type = type;
        this.salesItem = options?.salesItem ?? null;
        this.salesItemGroup = options?.salesItemGroup ?? null;
        this.salesPeriodEventId = options?.salesPeriodEventId ?? null;
    }

    public static salesItem(
        displayItemId: string,
        salesItem: SalesItem,
        options?: DisplayItemSalesItemOptions,
    ): DisplayItem {
        return new DisplayItem(
            displayItemId,
            DisplayItemType.SALES_ITEM,
            {
                salesItem: options?.salesItem ?? null,
                salesPeriodEventId: options?.salesPeriodEventId ?? null,
            },
        )
    }

    public static salesItemGroup(
        displayItemId: string,
        salesItemGroup: SalesItemGroup,
        options?: DisplayItemSalesItemGroupOptions,
    ): DisplayItem {
        return new DisplayItem(
            displayItemId,
            DisplayItemType.SALES_ITEM_GROUP,
            {
                salesItemGroup: options?.salesItemGroup ?? null,
                salesPeriodEventId: options?.salesPeriodEventId ?? null,
            },
        )
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.displayItemId != null) {
            properties["DisplayItemId"] = this.displayItemId;
        }
        if (this.type != null) {
            properties["Type"] = this.type;
        }
        if (this.salesItem != null) {
            properties["SalesItem"] = this.salesItem.properties();
        }
        if (this.salesItemGroup != null) {
            properties["SalesItemGroup"] = this.salesItemGroup.properties();
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): DisplayItemRef {
        return new DisplayItemRef(
            namespaceName,
        );
    }
}
