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

import {AcquireAction, ConsumeAction, VerifyAction} from "../../core/model";
import { CounterVerifyType } from "./enum/CounterVerifyType";
import { CounterScopeType } from "./enum/CounterScopeType";
import { CounterResetType } from "./enum/CounterResetType";

export default class VerifyCounterValueByUserId extends VerifyAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly counterName: string;
    private readonly verifyType: CounterVerifyType;
    private readonly scopeType: CounterScopeType|null = null;
    private readonly resetType: CounterResetType|null = null;
    private readonly conditionName: string|null = null;
    private readonly value: number|null = null;
    private readonly multiplyValueSpecifyingQuantity: boolean|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        counterName: string,
        verifyType: CounterVerifyType,
        scopeType: CounterScopeType|null = null,
        resetType: CounterResetType|null = null,
        conditionName: string|null = null,
        value: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.counterName = counterName;
        this.verifyType = verifyType;
        this.scopeType = scopeType ?? null;
        this.resetType = resetType ?? null;
        this.conditionName = conditionName ?? null;
        this.value = value ?? null;
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity ?? null;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.scopeType != null) {
            properties["scopeType"] = this.scopeType;
        }
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.conditionName != null) {
            properties["conditionName"] = this.conditionName;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        if (this.multiplyValueSpecifyingQuantity != null) {
            properties["multiplyValueSpecifyingQuantity"] = this.multiplyValueSpecifyingQuantity;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Mission:VerifyCounterValueByUserId";
    }
}
