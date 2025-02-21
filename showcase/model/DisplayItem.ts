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
import { DisplayItemOptions } from "./options/DisplayItemOptions";
import { DisplayItemTypeIsSalesItemOptions } from "./options/DisplayItemTypeIsSalesItemOptions";
import { DisplayItemTypeIsSalesItemGroupOptions } from "./options/DisplayItemTypeIsSalesItemGroupOptions";
import { DisplayItemType } from "./enums/DisplayItemType";

export default class DisplayItem {
    private readonly displayItemId: string;
    private readonly type: DisplayItemType;
    private readonly salesItem: SalesItem|null = null;
    private readonly salesItemGroup: SalesItemGroup|null = null;
    private readonly salesPeriodEventId: string|null = null;

    public constructor(
        displayItemId: string,
        type: DisplayItemType,
        options: DisplayItemOptions|null = null,
    ) {
        this.displayItemId = displayItemId;
        this.type = type;
        this.salesItem = options?.salesItem ?? null;
        this.salesItemGroup = options?.salesItemGroup ?? null;
        this.salesPeriodEventId = options?.salesPeriodEventId ?? null;
    }

    public static typeIsSalesItem(
        displayItemId: string,
        salesItem: SalesItem,
        options: DisplayItemTypeIsSalesItemOptions|null = null,
    ): DisplayItem {
        return new DisplayItem(
            displayItemId,
            DisplayItemType.SALES_ITEM,
            {
                salesItem: salesItem,
                salesPeriodEventId: options?.salesPeriodEventId,
            },
        );
    }

    public static typeIsSalesItemGroup(
        displayItemId: string,
        salesItemGroup: SalesItemGroup,
        options: DisplayItemTypeIsSalesItemGroupOptions|null = null,
    ): DisplayItem {
        return new DisplayItem(
            displayItemId,
            DisplayItemType.SALES_ITEM_GROUP,
            {
                salesItemGroup: salesItemGroup,
                salesPeriodEventId: options?.salesPeriodEventId,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.displayItemId != null) {
            properties["displayItemId"] = this.displayItemId;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.salesItem != null) {
            properties["salesItem"] = this.salesItem?.properties(
            );
        }
        if (this.salesItemGroup != null) {
            properties["salesItemGroup"] = this.salesItemGroup?.properties(
            );
        }
        if (this.salesPeriodEventId != null) {
            properties["salesPeriodEventId"] = this.salesPeriodEventId;
        }

        return properties;
    }
}
