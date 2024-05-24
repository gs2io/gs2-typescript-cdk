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

export default class CountUpByUserId extends ConsumeAction {
    private readonly namespaceName: string;
    private readonly limitName: string;
    private readonly counterName: string;
    private readonly userId: string;
    private readonly countUpValue: number|null = null;
    private readonly maxValue: number|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        limitName: string,
        counterName: string,
        countUpValue: number|null = null,
        maxValue: number|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.limitName = limitName;
        this.counterName = counterName;
        this.countUpValue = countUpValue ?? null;
        this.maxValue = maxValue ?? null;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.limitName != null) {
            properties["limitName"] = this.limitName;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.countUpValue != null) {
            properties["countUpValue"] = this.countUpValue;
        }
        if (this.maxValue != null) {
            properties["maxValue"] = this.maxValue;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Limit:CountUpByUserId";
    }
}
