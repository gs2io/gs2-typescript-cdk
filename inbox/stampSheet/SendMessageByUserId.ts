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
import TimeSpan from "../model/TimeSpan";

export default class SendMessageByUserId extends AcquireAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly metadata: string;
    private readonly readAcquireActions: AcquireAction[]|null = null;
    private readonly expiresAt: number|null = null;
    private readonly expiresTimeSpan: TimeSpan|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        metadata: string,
        readAcquireActions: AcquireAction[]|null = null,
        expiresAt: number|null = null,
        expiresTimeSpan: TimeSpan|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.metadata = metadata;
        this.readAcquireActions = readAcquireActions ?? null;
        this.expiresAt = expiresAt ?? null;
        this.expiresTimeSpan = expiresTimeSpan ?? null;
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
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.readAcquireActions != null) {
            properties["readAcquireActions"] = this.readAcquireActions.map(v => v.properties(
                ));
        }
        if (this.expiresAt != null) {
            properties["expiresAt"] = this.expiresAt;
        }
        if (this.expiresTimeSpan != null) {
            properties["expiresTimeSpan"] = this.expiresTimeSpan?.properties(
            );
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Inbox:SendMessageByUserId";
    }
}
