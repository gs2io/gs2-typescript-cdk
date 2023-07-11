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
import ItemModelRef from "./ItemModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";

export default class InventoryModelRef {
    private readonly namespaceName: string;
    private readonly inventoryName: string;

    public constructor(
        namespaceName: string,
        inventoryName: string,
    ) {
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
    }

    public itemModel(
        itemName: string,
    ): ItemModelRef {
        return new ItemModelRef(
            this.namespaceName,
            this.inventoryName,
            itemName,
        );
    }

    public addCapacity(
        addCapacityValue: number,
        userId: string|null = "#{userId}",
    ): AddCapacityByUserId {
        return new AddCapacityByUserId(
            this.namespaceName,
            this.inventoryName,
            addCapacityValue,
            userId,
        );
    }

    public setCapacity(
        newCapacityValue: number,
        userId: string|null = "#{userId}",
    ): SetCapacityByUserId {
        return new SetCapacityByUserId(
            this.namespaceName,
            this.inventoryName,
            newCapacityValue,
            userId,
        );
    }

    public acquireItemSet(
        itemName: string,
        acquireCount: number,
        expiresAt: number,
        createNewItemSet: boolean,
        itemSetName: string|null = null,
        userId: string|null = "#{userId}",
    ): AcquireItemSetByUserId {
        return new AcquireItemSetByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            acquireCount,
            expiresAt,
            createNewItemSet,
            itemSetName,
            userId,
        );
    }

    public addReferenceOf(
        itemName: string,
        itemSetName: string,
        referenceOf: string,
        userId: string|null = "#{userId}",
    ): AddReferenceOfByUserId {
        return new AddReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            itemSetName,
            referenceOf,
            userId,
        );
    }

    public deleteReferenceOf(
        itemName: string,
        itemSetName: string,
        referenceOf: string,
        userId: string|null = "#{userId}",
    ): DeleteReferenceOfByUserId {
        return new DeleteReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            itemSetName,
            referenceOf,
            userId,
        );
    }

    public consumeItemSet(
        itemName: string,
        consumeCount: number,
        itemSetName: string|null = null,
        userId: string|null = "#{userId}",
    ): ConsumeItemSetByUserId {
        return new ConsumeItemSetByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            consumeCount,
            itemSetName,
            userId,
        );
    }

    public verifyReferenceOf(
        itemName: string,
        itemSetName: string,
        referenceOf: string,
        verifyType: string,
        userId: string|null = "#{userId}",
    ): VerifyReferenceOfByUserId {
        return new VerifyReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            itemSetName,
            referenceOf,
            verifyType,
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
                "model",
                this.inventoryName,
            ],
        ).str(
        );
    }
}
