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

import {GetAttr, Join} from "../../core/func";
import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";

export default class BigItemModelRef {
    private readonly namespaceName: string;
    private readonly inventoryName: string;
    private readonly itemName: string;

    public constructor(
        namespaceName: string,
        inventoryName: string,
        itemName: string,
    ) {
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
    }

    public acquireBigItem(
        acquireCount: string,
        userId: string|null = "#{userId}",
    ): AcquireBigItemByUserId {
        return new AcquireBigItemByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            acquireCount,
            userId,
        );
    }

    public consumeBigItem(
        consumeCount: string,
        userId: string|null = "#{userId}",
    ): ConsumeBigItemByUserId {
        return new ConsumeBigItemByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            consumeCount,
            userId,
        );
    }

    public grn(
    ): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region(
                ).str(
                ),
                GetAttr.ownerId(
                ).str(
                ),
                "inventory",
                this.namespaceName,
                "big",
                "model",
                this.inventoryName,
                "item",
                this.itemName,
            ],
        ).str(
        );
    }
}