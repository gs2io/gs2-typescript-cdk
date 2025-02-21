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
import SimpleItemModelRef from "./SimpleItemModelRef";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import SetSimpleItemsByUserId from "../stampSheet/SetSimpleItemsByUserId";
import HeldCount from "../model/HeldCount";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
import ConsumeCount from "../model/ConsumeCount";
import VerifySimpleItemByUserId from "../stampSheet/VerifySimpleItemByUserId";
import { SimpleItemVerifyType } from "../stampSheet/enums/SimpleItemVerifyType";

export default class SimpleInventoryModelRef {
    private readonly namespaceName: string;
    private readonly inventoryName: string;

    public constructor(
        namespaceName: string,
        inventoryName: string,
    ) {
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
    }

    public simpleItemModel(
        itemName: string,
    ): SimpleItemModelRef {
        return new SimpleItemModelRef(
            this.namespaceName,
            this.inventoryName,
            itemName,
        );
    }

    public acquireSimpleItems(
        acquireCounts: AcquireCount[],
        userId: string = "#{userId}",
    ): AcquireSimpleItemsByUserId {
        return new AcquireSimpleItemsByUserId(
            this.namespaceName,
            this.inventoryName,
            acquireCounts,
            userId,
        );
    }

    public setSimpleItems(
        counts: HeldCount[],
        userId: string = "#{userId}",
    ): SetSimpleItemsByUserId {
        return new SetSimpleItemsByUserId(
            this.namespaceName,
            this.inventoryName,
            counts,
            userId,
        );
    }

    public consumeSimpleItems(
        consumeCounts: ConsumeCount[],
        userId: string = "#{userId}",
    ): ConsumeSimpleItemsByUserId {
        return new ConsumeSimpleItemsByUserId(
            this.namespaceName,
            this.inventoryName,
            consumeCounts,
            userId,
        );
    }

    public verifySimpleItem(
        itemName: string,
        verifyType: SimpleItemVerifyType,
        count: number,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifySimpleItemByUserId {
        return new VerifySimpleItemByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            verifyType,
            count,
            multiplyValueSpecifyingQuantity,
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
            ],
        ).str(
        );
    }
}
