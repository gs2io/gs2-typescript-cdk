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
import { GooglePlayRealtimeNotificationMessageOptions } from "./options/GooglePlayRealtimeNotificationMessageOptions";

export default class GooglePlayRealtimeNotificationMessage {
    private readonly data: string;
    private readonly messageId: string;
    private readonly publishTime: string;

    public constructor(
        data: string,
        messageId: string,
        publishTime: string,
        options: GooglePlayRealtimeNotificationMessageOptions|null = null,
    ) {
        this.data = data;
        this.messageId = messageId;
        this.publishTime = publishTime;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.data != null) {
            properties["data"] = this.data;
        }
        if (this.messageId != null) {
            properties["messageId"] = this.messageId;
        }
        if (this.publishTime != null) {
            properties["publishTime"] = this.publishTime;
        }

        return properties;
    }
}
