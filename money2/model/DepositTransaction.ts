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
import { DepositTransactionOptions } from "./options/DepositTransactionOptions";

export default class DepositTransaction {
    private readonly price: number;
    private readonly count: number;
    private readonly currency: string|null = null;
    private readonly depositedAt: number|null = null;

    public constructor(
        price: number,
        count: number,
        options: DepositTransactionOptions|null = null,
    ) {
        this.price = price;
        this.count = count;
        this.currency = options?.currency ?? null;
        this.depositedAt = options?.depositedAt ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.price != null) {
            properties["price"] = this.price;
        }
        if (this.currency != null) {
            properties["currency"] = this.currency;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        if (this.depositedAt != null) {
            properties["depositedAt"] = this.depositedAt;
        }

        return properties;
    }
}
