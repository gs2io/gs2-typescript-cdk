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
 *
 * deny overwrite
 */

import {GetAttr, Join} from "../../core/func";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import ConsumeCount from "../model/ConsumeCount";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";

export default class SimpleItemModelRef {
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

    public acquireSimpleItems(
        acquireCounts: AcquireCount[],
        userId: string|null = "#{userId}",
    ): AcquireSimpleItemsByUserId {
        return new AcquireSimpleItemsByUserId(
            this.namespaceName,
            this.inventoryName,
            acquireCounts,
            userId,
        );
    }

    public consumeSimpleItems(
        consumeCounts: ConsumeCount[],
        userId: string|null = "#{userId}",
    ): ConsumeSimpleItemsByUserId {
        return new ConsumeSimpleItemsByUserId(
            this.namespaceName,
            this.inventoryName,
            consumeCounts,
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
                "simple",
                "model",
                this.inventoryName,
                "item",
                this.itemName,
            ],
        ).str(
        );
    }
}
