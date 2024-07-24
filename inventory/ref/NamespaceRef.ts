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
import InventoryModelRef from "./InventoryModelRef";
import SimpleInventoryModelRef from "./SimpleInventoryModelRef";
import BigInventoryModelRef from "./BigInventoryModelRef";
import AddCapacityByUserId from "../stampSheet/AddCapacityByUserId";
import SetCapacityByUserId from "../stampSheet/SetCapacityByUserId";
import AcquireItemSetByUserId from "../stampSheet/AcquireItemSetByUserId";
import AcquireItemSetWithGradeByUserId from "../stampSheet/AcquireItemSetWithGradeByUserId";
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import DeleteReferenceOfByUserId from "../stampSheet/DeleteReferenceOfByUserId";
import AcquireSimpleItemsByUserId from "../stampSheet/AcquireSimpleItemsByUserId";
import AcquireCount from "../model/AcquireCount";
import SetSimpleItemsByUserId from "../stampSheet/SetSimpleItemsByUserId";
import HeldCount from "../model/HeldCount";
import AcquireBigItemByUserId from "../stampSheet/AcquireBigItemByUserId";
import SetBigItemByUserId from "../stampSheet/SetBigItemByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";
import ConsumeSimpleItemsByUserId from "../stampSheet/ConsumeSimpleItemsByUserId";
import ConsumeCount from "../model/ConsumeCount";
import ConsumeBigItemByUserId from "../stampSheet/ConsumeBigItemByUserId";
import VerifyInventoryCurrentMaxCapacityByUserId from "../stampSheet/VerifyInventoryCurrentMaxCapacityByUserId";
import { InventoryVerifyType } from "../stampSheet/enum/InventoryVerifyType";
import VerifyItemSetByUserId from "../stampSheet/VerifyItemSetByUserId";
import { ItemSetVerifyType } from "../stampSheet/enum/ItemSetVerifyType";
import VerifyReferenceOfByUserId from "../stampSheet/VerifyReferenceOfByUserId";
import { ReferenceOfVerifyType } from "../stampSheet/enum/ReferenceOfVerifyType";
import VerifySimpleItemByUserId from "../stampSheet/VerifySimpleItemByUserId";
import { SimpleItemVerifyType } from "../stampSheet/enum/SimpleItemVerifyType";
import VerifyBigItemByUserId from "../stampSheet/VerifyBigItemByUserId";
import { BigItemVerifyType } from "../stampSheet/enum/BigItemVerifyType";

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

    public bigInventoryModel(
        inventoryName: string,
    ): BigInventoryModelRef {
        return new BigInventoryModelRef(
            this.namespaceName,
            inventoryName,
        );
    }

    public addCapacity(
        inventoryName: string,
        addCapacityValue: number,
        userId: string = "#{userId}",
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
        userId: string = "#{userId}",
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
        expiresAt: number|null = null,
        createNewItemSet: boolean|null = null,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
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

    public acquireItemSetWithGrade(
        inventoryName: string,
        itemName: string,
        gradeModelId: string,
        gradeValue: number,
        userId: string = "#{userId}",
    ): AcquireItemSetWithGradeByUserId {
        return new AcquireItemSetWithGradeByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            gradeModelId,
            gradeValue,
            userId,
        );
    }

    public addReferenceOf(
        inventoryName: string,
        itemName: string,
        referenceOf: string,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): AddReferenceOfByUserId {
        return new AddReferenceOfByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            referenceOf,
            itemSetName,
            userId,
        );
    }

    public deleteReferenceOf(
        inventoryName: string,
        itemName: string,
        referenceOf: string,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): DeleteReferenceOfByUserId {
        return new DeleteReferenceOfByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            referenceOf,
            itemSetName,
            userId,
        );
    }

    public acquireSimpleItems(
        inventoryName: string,
        acquireCounts: AcquireCount[],
        userId: string = "#{userId}",
    ): AcquireSimpleItemsByUserId {
        return new AcquireSimpleItemsByUserId(
            this.namespaceName,
            inventoryName,
            acquireCounts,
            userId,
        );
    }

    public setSimpleItems(
        inventoryName: string,
        counts: HeldCount[],
        userId: string = "#{userId}",
    ): SetSimpleItemsByUserId {
        return new SetSimpleItemsByUserId(
            this.namespaceName,
            inventoryName,
            counts,
            userId,
        );
    }

    public acquireBigItem(
        inventoryName: string,
        itemName: string,
        acquireCount: string,
        userId: string = "#{userId}",
    ): AcquireBigItemByUserId {
        return new AcquireBigItemByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            acquireCount,
            userId,
        );
    }

    public setBigItem(
        inventoryName: string,
        itemName: string,
        count: string,
        userId: string = "#{userId}",
    ): SetBigItemByUserId {
        return new SetBigItemByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            count,
            userId,
        );
    }

    public consumeItemSet(
        inventoryName: string,
        itemName: string,
        consumeCount: number,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
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

    public consumeSimpleItems(
        inventoryName: string,
        consumeCounts: ConsumeCount[],
        userId: string = "#{userId}",
    ): ConsumeSimpleItemsByUserId {
        return new ConsumeSimpleItemsByUserId(
            this.namespaceName,
            inventoryName,
            consumeCounts,
            userId,
        );
    }

    public consumeBigItem(
        inventoryName: string,
        itemName: string,
        consumeCount: string,
        userId: string = "#{userId}",
    ): ConsumeBigItemByUserId {
        return new ConsumeBigItemByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            consumeCount,
            userId,
        );
    }

    public verifyInventoryCurrentMaxCapacity(
        inventoryName: string,
        verifyType: InventoryVerifyType,
        currentInventoryMaxCapacity: number,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyInventoryCurrentMaxCapacityByUserId {
        return new VerifyInventoryCurrentMaxCapacityByUserId(
            this.namespaceName,
            inventoryName,
            verifyType,
            currentInventoryMaxCapacity,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyItemSet(
        inventoryName: string,
        itemName: string,
        verifyType: ItemSetVerifyType,
        count: number,
        itemSetName: string|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyItemSetByUserId {
        return new VerifyItemSetByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            verifyType,
            count,
            itemSetName,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyReferenceOf(
        inventoryName: string,
        itemName: string,
        referenceOf: string,
        verifyType: ReferenceOfVerifyType,
        itemSetName: string|null = null,
        userId: string = "#{userId}",
    ): VerifyReferenceOfByUserId {
        return new VerifyReferenceOfByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            referenceOf,
            verifyType,
            itemSetName,
            userId,
        );
    }

    public verifySimpleItem(
        inventoryName: string,
        itemName: string,
        verifyType: SimpleItemVerifyType,
        count: number,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifySimpleItemByUserId {
        return new VerifySimpleItemByUserId(
            this.namespaceName,
            inventoryName,
            itemName,
            verifyType,
            count,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyBigItem(
        inventoryName: string,
        itemName: string,
        verifyType: BigItemVerifyType,
        count: string,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyBigItemByUserId {
        return new VerifyBigItemByUserId(
            this.namespaceName,
            inventoryName,
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
            ],
        ).str(
        );
    }
}
