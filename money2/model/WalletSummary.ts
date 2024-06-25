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
import { WalletSummaryOptions } from "./options/WalletSummaryOptions";

export default class WalletSummary {
    private readonly paid: number;
    private readonly free: number;
    private readonly total: number;

    public constructor(
        paid: number,
        free: number,
        total: number,
        options: WalletSummaryOptions|null = null,
    ) {
        this.paid = paid;
        this.free = free;
        this.total = total;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.paid != null) {
            properties["paid"] = this.paid;
        }
        if (this.free != null) {
            properties["free"] = this.free;
        }
        if (this.total != null) {
            properties["total"] = this.total;
        }

        return properties;
    }
}
