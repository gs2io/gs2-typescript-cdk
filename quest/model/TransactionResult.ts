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
import VerifyActionResult from "./VerifyActionResult";
import ConsumeActionResult from "./ConsumeActionResult";
import AcquireActionResult from "./AcquireActionResult";
import { TransactionResultOptions } from "./options/TransactionResultOptions";

export default class TransactionResult {
    private readonly transactionId: string;
    private readonly verifyResults: VerifyActionResult[]|null = null;
    private readonly consumeResults: ConsumeActionResult[]|null = null;
    private readonly acquireResults: AcquireActionResult[]|null = null;

    public constructor(
        transactionId: string,
        options: TransactionResultOptions|null = null,
    ) {
        this.transactionId = transactionId;
        this.verifyResults = options?.verifyResults ?? null;
        this.consumeResults = options?.consumeResults ?? null;
        this.acquireResults = options?.acquireResults ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.verifyResults != null) {
            properties["verifyResults"] = this.verifyResults.map(v => v.properties(
                ));
        }
        if (this.consumeResults != null) {
            properties["consumeResults"] = this.consumeResults.map(v => v.properties(
                ));
        }
        if (this.acquireResults != null) {
            properties["acquireResults"] = this.acquireResults.map(v => v.properties(
                ));
        }

        return properties;
    }
}
