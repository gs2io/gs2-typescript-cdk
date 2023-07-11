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
import InventoryModelRef from "./InventoryModelRef";
import SimpleInventoryModelRef from "./SimpleInventoryModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import ConsumeCount from "../model/ConsumeCount";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public inventoryModel(
        inventoryName: string,
    ): InventoryModelRef {
        return new InventoryModelRef(
            this.namespaceName,
            inventoryName,
        );
    }

    public simpleInventoryModel(
        inventoryName: string,
    ): SimpleInventoryModelRef {
        return new SimpleInventoryModelRef(
            this.namespaceName,
            inventoryName,
        );
    }

    public addCapacity(
        inventoryName: string,
        addCapacityValue: number,
        userId: string|null = "#{userId}",
    ): AddCapacityByUserId {
        return new AddCapacityByUserId(
            this.namespaceName,
            inventoryName,
            addCapacityValue,
            userId,
        );
    }

    public setCapacity(
        inventoryName: string,
        newCapacityValue: number,
        userId: string|null = "#{userId}",
    ): SetCapacityByUserId {
        return new SetCapacityByUserId(
            this.namespaceName,
            inventoryName,
            newCapacityValue,
            userId,
        );
    }

    public acquireItemSet(
        inventoryName: string,
        itemName: string,
        acquireCount: number,
        expiresAt: number,
        createNewItemSet: boolean,
        itemSetName: string|null = null,
        userId: string|null = "#{userId}",
    ): AcquireItemSetByUserId {
        return new AcquireItemSetByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            acquireCount,
            expiresAt,
            createNewItemSet,
            itemSetName,
            userId,
        );
    }

    public addReferenceOf(
        inventoryName: string,
        itemName: string,
        itemSetName: string,
        referenceOf: string,
        userId: string|null = "#{userId}",
    ): AddReferenceOfByUserId {
        return new AddReferenceOfByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            itemSetName,
            referenceOf,
            userId,
        );
    }

    public deleteReferenceOf(
        inventoryName: string,
        itemName: string,
        itemSetName: string,
        referenceOf: string,
        userId: string|null = "#{userId}",
    ): DeleteReferenceOfByUserId {
        return new DeleteReferenceOfByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            itemSetName,
            referenceOf,
            userId,
        );
    }

    public acquireSimpleItems(
        inventoryName: string,
        acquireCounts: AcquireCount[],
        userId: string|null = "#{userId}",
    ): AcquireSimpleItemsByUserId {
        return new AcquireSimpleItemsByUserId(
            this.namespaceName,
            inventoryName,
            acquireCounts,
            userId,
        );
    }

    public consumeItemSet(
        inventoryName: string,
        itemName: string,
        consumeCount: number,
        itemSetName: string|null = null,
        userId: string|null = "#{userId}",
    ): ConsumeItemSetByUserId {
        return new ConsumeItemSetByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            consumeCount,
            itemSetName,
            userId,
        );
    }

    public verifyReferenceOf(
        inventoryName: string,
        itemName: string,
        itemSetName: string,
        referenceOf: string,
        verifyType: string,
        userId: string|null = "#{userId}",
    ): VerifyReferenceOfByUserId {
        return new VerifyReferenceOfByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            itemSetName,
            referenceOf,
            verifyType,
            userId,
        );
    }

    public consumeSimpleItems(
        inventoryName: string,
        consumeCounts: ConsumeCount[],
        userId: string|null = "#{userId}",
    ): ConsumeSimpleItemsByUserId {
        return new ConsumeSimpleItemsByUserId(
            this.namespaceName,
            inventoryName,
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
            ],
        ).str(
        );
    }
}
