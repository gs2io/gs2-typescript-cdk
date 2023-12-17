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
import { ChangeStateEventOptions } from "./options/ChangeStateEventOptions";

export default class ChangeStateEvent {
    private readonly taskName: string;
    private readonly hash: string;
    private readonly timestamp: number;

    public constructor(
        taskName: string,
        hash: string,
        timestamp: number,
        options: ChangeStateEventOptions|null = null,
    ) {
        this.taskName = taskName;
        this.hash = hash;
        this.timestamp = timestamp;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.taskName != null) {
            properties["taskName"] = this.taskName;
        }
        if (this.hash != null) {
            properties["hash"] = this.hash;
        }
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }

        return properties;
    }
}
