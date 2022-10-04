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

export const DisplayItemMasterType = {
    SALES_ITEM: "salesItem",
    SALES_ITEM_GROUP: "salesItemGroup",
} as const;
export type DisplayItemMasterType = typeof DisplayItemMasterType[keyof typeof DisplayItemMasterType];

export interface DisplayItemMasterOptions {
    salesItemName?: string|null|undefined;
    salesItemGroupName?: string|null|undefined;
    salesPeriodEventId?: string|null|undefined;
}

export default class DisplayItemMaster {
	private readonly displayItemId: string;
	private readonly type: DisplayItemMasterType;
    private readonly salesItemName: string|null = null;
    private readonly salesItemGroupName: string|null = null;
    private readonly salesPeriodEventId: string|null = null;

    public constructor(
            displayItemId: string,
            type: DisplayItemMasterType,
            options?: DisplayItemMasterOptions,
    ) {
        this.displayItemId = displayItemId;
        this.type = type;
        this.salesItemName = options?.salesItemName ?? null;
        this.salesItemGroupName = options?.salesItemGroupName ?? null;
        this.salesPeriodEventId = options?.salesPeriodEventId ?? null;
    }

    public static salesItem(
        displayItemId: string,
        salesItemName: string,
        salesPeriodEventId: string|null = null,
    ): DisplayItemMaster {
        return new DisplayItemMaster(
            displayItemId,
            DisplayItemMasterType.SALES_ITEM,
            {
                salesItemName: salesItemName,
                salesPeriodEventId: salesPeriodEventId,
            }
        )
    }

    public static salesItemGroup(
        displayItemId: string,
        salesItemGroupName: string,
        salesPeriodEventId: string|null = null,
    ): DisplayItemMaster {
        return new DisplayItemMaster(
            displayItemId,
            DisplayItemMasterType.SALES_ITEM_GROUP,
            {
                salesItemGroupName: salesItemGroupName,
                salesPeriodEventId: salesPeriodEventId,
            }
        )
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.displayItemId != null) {
            properties["DisplayItemId"] = this.displayItemId;
        }
        if (this.type != null) {
            properties["Type"] = this.type.toString();
        }
        if (this.salesItemName != null) {
            properties["SalesItemName"] = this.salesItemName;
        }
        if (this.salesItemGroupName != null) {
            properties["SalesItemGroupName"] = this.salesItemGroupName;
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }
}
