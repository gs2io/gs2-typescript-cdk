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
import { AwaitSkipType } from "./enum/AwaitSkipType";

export default class SkipByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly awaitName: string|null = null;
    private readonly skipType: AwaitSkipType|null = null;
    private readonly minutes: number|null = null;
    private readonly rate: number|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        awaitName: string|null = null,
        skipType: AwaitSkipType|null = null,
        minutes: number|null = null,
        rate: number|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.awaitName = awaitName ?? null;
        this.skipType = skipType ?? null;
        this.minutes = minutes ?? null;
        this.rate = rate ?? null;
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
        if (this.skipType != null) {
            properties["skipType"] = this.skipType;
        }
        if (this.minutes != null) {
            properties["minutes"] = this.minutes;
        }
        if (this.rate != null) {
            properties["rate"] = this.rate;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Exchange:SkipByUserId";
    }
}
