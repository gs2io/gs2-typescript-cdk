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
 *
 * deny overwrite
 */

import {AcquireAction, ConsumeAction, VerifyAction} from "../../core/model";
import RandomStatus from "../model/RandomStatus";

export default class InvokeScript extends AcquireAction {
    private readonly scriptId: string|null = null;
    private readonly userId: string|null = null;
    private readonly args: string|null = null;
    private readonly randomStatus: RandomStatus|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        scriptId: string|null = null,
        args: string|null = null,
        randomStatus: RandomStatus|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.scriptId = scriptId ?? null;
        this.args = args ?? null;
        this.randomStatus = randomStatus ?? null;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.scriptId != null) {
            properties["scriptId"] = this.scriptId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.args != null) {
            properties["args"] = this.args;
        }
        if (this.randomStatus != null) {
            properties["randomStatus"] = this.randomStatus?.properties(
            );
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Script:InvokeScript";
    }
}
