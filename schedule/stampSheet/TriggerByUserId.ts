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
import { TriggerTriggerStrategy } from "./enum/TriggerTriggerStrategy";

export default class TriggerByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly triggerName: string;
    private readonly userId: string;
    private readonly triggerStrategy: TriggerTriggerStrategy;
    private readonly ttl: number;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        triggerName: string,
        triggerStrategy: TriggerTriggerStrategy,
        ttl: number,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.triggerName = triggerName;
        this.triggerStrategy = triggerStrategy;
        this.ttl = ttl;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.triggerName != null) {
            properties["triggerName"] = this.triggerName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.triggerStrategy != null) {
            properties["triggerStrategy"] = this.triggerStrategy;
        }
        if (this.ttl != null) {
            properties["ttl"] = this.ttl;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Schedule:TriggerByUserId";
    }
}
