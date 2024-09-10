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
import InGameLogTag from "./InGameLogTag";
import { InGameLogOptions } from "./options/InGameLogOptions";

export default class InGameLog {
    private readonly timestamp: number;
    private readonly requestId: string;
    private readonly payload: string;
    private readonly userId: string|null = null;
    private readonly tags: InGameLogTag[]|null = null;

    public constructor(
        timestamp: number,
        requestId: string,
        payload: string,
        options: InGameLogOptions|null = null,
    ) {
        this.timestamp = timestamp;
        this.requestId = requestId;
        this.payload = payload;
        this.userId = options?.userId ?? null;
        this.tags = options?.tags ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.tags != null) {
            properties["tags"] = this.tags.map(v => v.properties(
                ));
        }
        if (this.payload != null) {
            properties["payload"] = this.payload;
        }

        return properties;
    }
}
