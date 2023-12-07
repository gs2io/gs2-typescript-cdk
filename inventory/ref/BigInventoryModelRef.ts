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
import BigItemModelRef from "./BigItemModelRef";
import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import SetBigItemByUserId from "../stampSheet/SetBigItemByUserId";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
import VerifyBigItemByUserId from "../stampSheet/VerifyBigItemByUserId";

export default class BigInventoryModelRef {
    private readonly namespaceName: string;
    private readonly inventoryName: string;

    public constructor(
        namespaceName: string,
        inventoryName: string,
    ) {
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
    }

    public bigItemModel(
        itemName: string,
    ): BigItemModelRef {
        return new BigItemModelRef(
            this.namespaceName,
            this.inventoryName,
            itemName,
        );
    }

    public acquireBigItem(
        itemName: string,
        acquireCount: string,
        userId: string|null = "#{userId}",
    ): AcquireBigItemByUserId {
        return new AcquireBigItemByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            acquireCount,
            userId,
        );
    }

    public setBigItem(
        itemName: string,
        count: string,
        userId: string|null = "#{userId}",
    ): SetBigItemByUserId {
        return new SetBigItemByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            count,
            userId,
        );
    }

    public consumeBigItem(
        itemName: string,
        consumeCount: string,
        userId: string|null = "#{userId}",
    ): ConsumeBigItemByUserId {
        return new ConsumeBigItemByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            consumeCount,
            userId,
        );
    }

    public verifyBigItem(
        itemName: string,
        verifyType: string,
        count: string,
        userId: string|null = "#{userId}",
    ): VerifyBigItemByUserId {
        return new VerifyBigItemByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            verifyType,
            count,
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
            ],
        ).str(
        );
    }
}
