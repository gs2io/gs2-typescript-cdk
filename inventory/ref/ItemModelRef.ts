/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
import AddReferenceOfByUserId from "../stampSheet/AddReferenceOfByUserId";
import ConsumeItemSetByUserId from "../stampSheet/ConsumeItemSetByUserId";


export default class ItemModelRef {
    private namespaceName: string;
    private inventoryName: string;
    private itemName: string;

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
            expiresAt: number,
            createNewItemSet: boolean,
            itemSetName: string|null = null,
            userId: string = '#{userId}',
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

    public addReferenceOf(
            itemSetName: string,
            referenceOf: string,
            userId: string = '#{userId}',
    ): AddReferenceOfByUserId {
        return new AddReferenceOfByUserId(
            this.namespaceName,
            this.inventoryName,
            this.itemName,
            itemSetName,
            referenceOf,
            userId,
        );
    }

    public consumeItemSet(
            consumeCount: number,
            itemSetName: string|null = null,
            userId: string = '#{userId}',
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

    public grn(): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region().str(),
                GetAttr.ownerId().str(),
                "inventory",
                this.namespaceName,
                "model",
                this.inventoryName,
                "item",
                this.itemName
            ]
        ).str();
    }
}
