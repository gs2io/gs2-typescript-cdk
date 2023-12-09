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

import {AcquireAction, ConsumeAction} from "../../core/model";
import { CounterVerifyType } from "./enum/CounterVerifyType";

export default class VerifyCounterByUserId extends ConsumeAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly limitName: string;
    private readonly counterName: string;
    private readonly verifyType: CounterVerifyType;
    private readonly count: number|null = null;


    public constructor(
        namespaceName: string,
        limitName: string,
        counterName: string,
        verifyType: CounterVerifyType,
        count: number|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.limitName = limitName;
        this.counterName = counterName;
        this.verifyType = verifyType;
        this.count = count ?? null;
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
        if (this.limitName != null) {
            properties["limitName"] = this.limitName;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Limit:VerifyCounterByUserId";
    }
}
