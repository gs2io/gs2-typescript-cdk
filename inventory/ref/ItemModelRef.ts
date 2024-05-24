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
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AcquireItemSetWithGradeByUserId from "../stampSheet/AcquireItemSetWithGradeByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import { ItemSetVerifyType } from "../stampSheet/enum/ItemSetVerifyType";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import { ReferenceOfVerifyType } from "../stampSheet/enum/ReferenceOfVerifyType";

export default class ItemModelRef {
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

    public acquireItemSet(
        acquireCount: number,
        expiresAt: number|null = null,
        createNewItemSet: boolean|null = null,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): AcquireItemSetByUserId {
        return new AcquireItemSetByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            acquireCount,
            expiresAt,
            createNewItemSet,
            itemSetName,
            userId,
        );
    }

    public acquireItemSetWithGrade(
        gradeModelId: string,
        gradeValue: number,
        userId: string = "#{userId}",
    ): AcquireItemSetWithGradeByUserId {
        return new AcquireItemSetWithGradeByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            gradeModelId,
            gradeValue,
            userId,
        );
    }

    public addReferenceOf(
        referenceOf: string,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): AddReferenceOfByUserId {
        return new AddReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            referenceOf,
            itemSetName,
            userId,
        );
    }

    public deleteReferenceOf(
        referenceOf: string,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): DeleteReferenceOfByUserId {
        return new DeleteReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            referenceOf,
            itemSetName,
            userId,
        );
    }

    public consumeItemSet(
        consumeCount: number,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): ConsumeItemSetByUserId {
        return new ConsumeItemSetByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            consumeCount,
            itemSetName,
            userId,
        );
    }

    public verifyItemSet(
        verifyType: ItemSetVerifyType,
        count: number,
        itemSetName: string|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyItemSetByUserId {
        return new VerifyItemSetByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            verifyType,
            count,
            itemSetName,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyReferenceOf(
        referenceOf: string,
        verifyType: ReferenceOfVerifyType,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): VerifyReferenceOfByUserId {
        return new VerifyReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
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
                "item",
                this.itemName,
            ],
        ).str(
        );
    }
}
