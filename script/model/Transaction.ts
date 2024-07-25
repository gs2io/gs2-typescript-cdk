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
import { VerifyAction } from "../../core/model";
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import { TransactionOptions } from "./options/TransactionOptions";

export default class Transaction {
    private readonly transactionId: string|null = null;
    private readonly verifyActions: VerifyAction[]|null = null;
    private readonly consumeActions: ConsumeAction[]|null = null;
    private readonly acquireActions: AcquireAction[]|null = null;

    public constructor(
        options: TransactionOptions|null = null,
    ) {
        this.transactionId = options?.transactionId ?? null;
        this.verifyActions = options?.verifyActions ?? null;
        this.consumeActions = options?.consumeActions ?? null;
        this.acquireActions = options?.acquireActions ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.verifyActions != null) {
            properties["verifyActions"] = this.verifyActions.map(v => v.properties(
                ));
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties(
                ));
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties(
                ));
        }

        return properties;
    }
}
