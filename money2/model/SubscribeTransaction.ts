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
import { SubscribeTransactionOptions } from "./options/SubscribeTransactionOptions";
import { SubscribeTransactionStore } from "./enums/SubscribeTransactionStore";
import { SubscribeTransactionStatusDetail } from "./enums/SubscribeTransactionStatusDetail";

export default class SubscribeTransaction {
    private readonly contentName: string;
    private readonly transactionId: string;
    private readonly store: SubscribeTransactionStore;
    private readonly statusDetail: SubscribeTransactionStatusDetail;
    private readonly expiresAt: number;
    private readonly userId: string|null = null;
    private readonly lastAllocatedAt: number|null = null;
    private readonly lastTakeOverAt: number|null = null;
    private readonly revision: number|null = null;

    public constructor(
        contentName: string,
        transactionId: string,
        store: SubscribeTransactionStore,
        statusDetail: SubscribeTransactionStatusDetail,
        expiresAt: number,
        options: SubscribeTransactionOptions|null = null,
    ) {
        this.contentName = contentName;
        this.transactionId = transactionId;
        this.store = store;
        this.statusDetail = statusDetail;
        this.expiresAt = expiresAt;
        this.userId = options?.userId ?? null;
        this.lastAllocatedAt = options?.lastAllocatedAt ?? null;
        this.lastTakeOverAt = options?.lastTakeOverAt ?? null;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.contentName != null) {
            properties["contentName"] = this.contentName;
        }
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.store != null) {
            properties["store"] = this.store;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.statusDetail != null) {
            properties["statusDetail"] = this.statusDetail;
        }
        if (this.expiresAt != null) {
            properties["expiresAt"] = this.expiresAt;
        }
        if (this.lastAllocatedAt != null) {
            properties["lastAllocatedAt"] = this.lastAllocatedAt;
        }
        if (this.lastTakeOverAt != null) {
            properties["lastTakeOverAt"] = this.lastTakeOverAt;
        }

        return properties;
    }
}
