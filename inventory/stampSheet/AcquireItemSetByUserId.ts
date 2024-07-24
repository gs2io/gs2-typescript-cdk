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

import {AcquireAction, ConsumeAction, VerifyAction} from "../../core/model";

export default class AcquireItemSetByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly inventoryName: string;
    private readonly itemName: string;
    private readonly userId: string;
    private readonly acquireCount: number;
    private readonly expiresAt: number|null = null;
    private readonly createNewItemSet: boolean|null = null;
    private readonly itemSetName: string|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        inventoryName: string,
        itemName: string,
        acquireCount: number,
        expiresAt: number|null = null,
        createNewItemSet: boolean|null = null,
        itemSetName: string|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
        this.acquireCount = acquireCount;
        this.expiresAt = expiresAt ?? null;
        this.createNewItemSet = createNewItemSet ?? null;
        this.itemSetName = itemSetName ?? null;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.inventoryName != null) {
            properties["inventoryName"] = this.inventoryName;
        }
        if (this.itemName != null) {
            properties["itemName"] = this.itemName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.acquireCount != null) {
            properties["acquireCount"] = this.acquireCount;
        }
        if (this.expiresAt != null) {
            properties["expiresAt"] = this.expiresAt;
        }
        if (this.createNewItemSet != null) {
            properties["createNewItemSet"] = this.createNewItemSet;
        }
        if (this.itemSetName != null) {
            properties["itemSetName"] = this.itemSetName;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Inventory:AcquireItemSetByUserId";
    }
}
