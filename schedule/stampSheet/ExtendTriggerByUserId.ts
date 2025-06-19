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

export default class ExtendTriggerByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly triggerName: string;
    private readonly userId: string;
    private readonly extendSeconds: number;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        triggerName: string,
        extendSeconds: number,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.triggerName = triggerName;
        this.extendSeconds = extendSeconds;
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
        if (this.extendSeconds != null) {
            properties["extendSeconds"] = this.extendSeconds;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Schedule:ExtendTriggerByUserId";
    }
}
