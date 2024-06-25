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
import DepositTransaction from "./DepositTransaction";
import WalletSummary from "./WalletSummary";
import { DepositEventOptions } from "./options/DepositEventOptions";

export default class DepositEvent {
    private readonly slot: number;
    private readonly status: WalletSummary;
    private readonly depositTransactions: DepositTransaction[]|null = null;

    public constructor(
        slot: number,
        status: WalletSummary,
        options: DepositEventOptions|null = null,
    ) {
        this.slot = slot;
        this.status = status;
        this.depositTransactions = options?.depositTransactions ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.slot != null) {
            properties["slot"] = this.slot;
        }
        if (this.depositTransactions != null) {
            properties["depositTransactions"] = this.depositTransactions.map(v => v.properties(
                ));
        }
        if (this.status != null) {
            properties["status"] = this.status?.properties(
            );
        }

        return properties;
    }
}
