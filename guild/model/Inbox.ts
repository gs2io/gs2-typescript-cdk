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
import ReceiveMemberRequest from "./ReceiveMemberRequest";
import { InboxOptions } from "./options/InboxOptions";

export default class Inbox {
    private readonly guildName: string;
    private readonly fromUserIds: string[]|null = null;
    private readonly receiveMemberRequests: ReceiveMemberRequest[]|null = null;
    private readonly revision: number|null = null;

    public constructor(
        guildName: string,
        options: InboxOptions|null = null,
    ) {
        this.guildName = guildName;
        this.fromUserIds = options?.fromUserIds ?? null;
        this.receiveMemberRequests = options?.receiveMemberRequests ?? null;
        this.revision = options?.revision ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.guildName != null) {
            properties["guildName"] = this.guildName;
        }
        if (this.fromUserIds != null) {
            properties["fromUserIds"] = this.fromUserIds;
        }
        if (this.receiveMemberRequests != null) {
            properties["receiveMemberRequests"] = this.receiveMemberRequests.map(v => v.properties(
                ));
        }

        return properties;
    }
}
