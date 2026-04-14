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
import Label from "./Label";
import { LogEntryOptions } from "./options/LogEntryOptions";
import { LogEntryStatus } from "./enums/LogEntryStatus";

export default class LogEntry {
    private readonly timestamp: number;
    private readonly status: LogEntryStatus;
    private readonly duration: number;
    private readonly line: string;
    private readonly labels: Label[]|null = null;

    public constructor(
        timestamp: number,
        status: LogEntryStatus,
        duration: number,
        line: string,
        options: LogEntryOptions|null = null,
    ) {
        this.timestamp = timestamp;
        this.status = status;
        this.duration = duration;
        this.line = line;
        this.labels = options?.labels ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }
        if (this.duration != null) {
            properties["duration"] = this.duration;
        }
        if (this.line != null) {
            properties["line"] = this.line;
        }
        if (this.labels != null) {
            properties["labels"] = this.labels.map(v => v.properties(
                ));
        }

        return properties;
    }
}
