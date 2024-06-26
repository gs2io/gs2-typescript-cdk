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
import { DailyTransactionHistoryOptions } from "./options/DailyTransactionHistoryOptions";

export default class DailyTransactionHistory {
    private readonly year: number;
    private readonly month: number;
    private readonly day: number;
    private readonly currency: string;
    private readonly depositAmount: number;
    private readonly withdrawAmount: number;
    private readonly revision: number|null = null;

    public constructor(
        year: number,
        month: number,
        day: number,
        currency: string,
        depositAmount: number,
        withdrawAmount: number,
        options: DailyTransactionHistoryOptions|null = null,
    ) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.currency = currency;
        this.depositAmount = depositAmount;
        this.withdrawAmount = withdrawAmount;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.year != null) {
            properties["year"] = this.year;
        }
        if (this.month != null) {
            properties["month"] = this.month;
        }
        if (this.day != null) {
            properties["day"] = this.day;
        }
        if (this.currency != null) {
            properties["currency"] = this.currency;
        }
        if (this.depositAmount != null) {
            properties["depositAmount"] = this.depositAmount;
        }
        if (this.withdrawAmount != null) {
            properties["withdrawAmount"] = this.withdrawAmount;
        }

        return properties;
    }
}
