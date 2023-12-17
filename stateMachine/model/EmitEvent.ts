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
import { EmitEventOptions } from "./options/EmitEventOptions";

export default class EmitEvent {
    private readonly event: string;
    private readonly parameters: string;
    private readonly timestamp: number;

    public constructor(
        event: string,
        parameters: string,
        timestamp: number,
        options: EmitEventOptions|null = null,
    ) {
        this.event = event;
        this.parameters = parameters;
        this.timestamp = timestamp;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.event != null) {
            properties["event"] = this.event;
        }
        if (this.parameters != null) {
            properties["parameters"] = this.parameters;
        }
        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }

        return properties;
    }
}
