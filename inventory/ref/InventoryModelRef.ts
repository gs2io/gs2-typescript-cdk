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
import AcquireItemSetWithGradeByUserId from "../stampSheet/AcquireItemSetWithGradeByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import VerifyInventoryCurrentMaxCapacityByUserId from "../stampSheet/VerifyInventoryCurrentMaxCapacityByUserId";
import { InventoryVerifyType } from "../stampSheet/enum/InventoryVerifyType";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import { ItemSetVerifyType } from "../stampSheet/enum/ItemSetVerifyType";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import { ReferenceOfVerifyType } from "../stampSheet/enum/ReferenceOfVerifyType";

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
        userId: string = "#{userId}",
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
        userId: string = "#{userId}",
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
        expiresAt: number|null = null,
        createNewItemSet: boolean|null = null,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
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

    public acquireItemSetWithGrade(
        itemName: string,
        gradeModelId: string,
        gradeValue: number,
        userId: string = "#{userId}",
    ): AcquireItemSetWithGradeByUserId {
        return new AcquireItemSetWithGradeByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            gradeModelId,
            gradeValue,
            userId,
        );
    }

    public addReferenceOf(
        itemName: string,
        referenceOf: string,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): AddReferenceOfByUserId {
        return new AddReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            referenceOf,
            itemSetName,
            userId,
        );
    }

    public deleteReferenceOf(
        itemName: string,
        referenceOf: string,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): DeleteReferenceOfByUserId {
        return new DeleteReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            referenceOf,
            itemSetName,
            userId,
        );
    }

    public verifyInventoryCurrentMaxCapacity(
        verifyType: InventoryVerifyType,
        currentInventoryMaxCapacity: number,
        userId: string = "#{userId}",
    ): VerifyInventoryCurrentMaxCapacityByUserId {
        return new VerifyInventoryCurrentMaxCapacityByUserId(
            this.namespaceName,
            this.inventoryName,
            verifyType,
            currentInventoryMaxCapacity,
            userId,
        );
    }

    public consumeItemSet(
        itemName: string,
        consumeCount: number,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
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

    public verifyItemSet(
        itemName: string,
        verifyType: ItemSetVerifyType,
        count: number,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): VerifyItemSetByUserId {
        return new VerifyItemSetByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            verifyType,
            count,
            itemSetName,
            userId,
        );
    }

    public verifyReferenceOf(
        itemName: string,
        referenceOf: string,
        verifyType: ReferenceOfVerifyType,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): VerifyReferenceOfByUserId {
        return new VerifyReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            itemName,
            referenceOf,
            verifyType,
            itemSetName,
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
