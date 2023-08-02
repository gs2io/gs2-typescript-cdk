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
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import { StampSheetResultOptions } from "./options/StampSheetResultOptions";

export default class StampSheetResult {
    private readonly userId: string;
    private readonly transactionId: string;
    private readonly sheetRequest: AcquireAction;
    private readonly taskRequests: ConsumeAction[]|null = null;
    private readonly taskResults: string[]|null = null;
    private readonly sheetResult: string|null = null;
    private readonly nextTransactionId: string|null = null;

    public constructor(
        userId: string,
        transactionId: string,
        sheetRequest: AcquireAction,
        options: StampSheetResultOptions|null = null,
    ) {
        this.userId = userId;
        this.transactionId = transactionId;
        this.sheetRequest = sheetRequest;
        this.taskRequests = options?.taskRequests ?? null;
        this.taskResults = options?.taskResults ?? null;
        this.sheetResult = options?.sheetResult ?? null;
        this.nextTransactionId = options?.nextTransactionId ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.transactionId != null) {
            properties["transactionId"] = this.transactionId;
        }
        if (this.taskRequests != null) {
            properties["taskRequests"] = this.taskRequests.map(v => v.properties(
                ));
        }
        if (this.sheetRequest != null) {
            properties["sheetRequest"] = this.sheetRequest?.properties(
            );
        }
        if (this.taskResults != null) {
            properties["taskResults"] = this.taskResults;
        }
        if (this.sheetResult != null) {
            properties["sheetResult"] = this.sheetResult;
        }
        if (this.nextTransactionId != null) {
            properties["nextTransactionId"] = this.nextTransactionId;
        }

        return properties;
    }
}
