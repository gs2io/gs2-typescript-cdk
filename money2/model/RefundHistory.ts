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
import AppleAppStoreVerifyReceiptEvent from "./AppleAppStoreVerifyReceiptEvent";
import GooglePlayVerifyReceiptEvent from "./GooglePlayVerifyReceiptEvent";
import RefundEvent from "./RefundEvent";
import { RefundHistoryOptions } from "./options/RefundHistoryOptions";

export default class RefundHistory {
    private readonly transactionId: string;
    private readonly year: number;
    private readonly month: number;
    private readonly day: number;
    private readonly detail: RefundEvent;
    private readonly userId: string|null = null;

    public constructor(
        transactionId: string,
        year: number,
        month: number,
        day: number,
        detail: RefundEvent,
        options: RefundHistoryOptions|null = null,
    ) {
        this.transactionId = transactionId;
        this.year = year;
        this.month = month;
        this.day = day;
        this.detail = detail;
        this.userId = options?.userId ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.year != null) {
            properties["year"] = this.year;
        }
        if (this.month != null) {
            properties["month"] = this.month;
        }
        if (this.day != null) {
            properties["day"] = this.day;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.detail != null) {
            properties["detail"] = this.detail?.properties(
            );
        }

        return properties;
    }
}
