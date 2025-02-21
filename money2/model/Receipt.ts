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
import { ReceiptOptions } from "./options/ReceiptOptions";
import { ReceiptStore } from "./enums/ReceiptStore";

export default class Receipt {
    private readonly store: ReceiptStore;
    private readonly transactionID: string;
    private readonly payload: string;

    public constructor(
        store: ReceiptStore,
        transactionID: string,
        payload: string,
        options: ReceiptOptions|null = null,
    ) {
        this.store = store;
        this.transactionID = transactionID;
        this.payload = payload;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.store != null) {
            properties["store"] = this.store;
        }
        if (this.transactionID != null) {
            properties["transactionID"] = this.transactionID;
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }

        return properties;
    }
}
