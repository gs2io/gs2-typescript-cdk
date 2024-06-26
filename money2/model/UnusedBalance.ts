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
import { UnusedBalanceOptions } from "./options/UnusedBalanceOptions";

export default class UnusedBalance {
    private readonly currency: string;
    private readonly balance: number;
    private readonly revision: number|null = null;

    public constructor(
        currency: string,
        balance: number,
        options: UnusedBalanceOptions|null = null,
    ) {
        this.currency = currency;
        this.balance = balance;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.currency != null) {
            properties["currency"] = this.currency;
        }
        if (this.balance != null) {
            properties["balance"] = this.balance;
        }

        return properties;
    }
}
