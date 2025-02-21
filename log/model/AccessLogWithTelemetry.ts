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
import { AccessLogWithTelemetryOptions } from "./options/AccessLogWithTelemetryOptions";
import { AccessLogWithTelemetryStatus } from "./enums/AccessLogWithTelemetryStatus";

export default class AccessLogWithTelemetry {
    private readonly timestamp: number;
    private readonly sourceRequestId: string;
    private readonly requestId: string;
    private readonly duration: number;
    private readonly service: string;
    private readonly method: string;
    private readonly request: string;
    private readonly result: string;
    private readonly status: AccessLogWithTelemetryStatus;
    private readonly userId: string|null = null;

    public constructor(
        timestamp: number,
        sourceRequestId: string,
        requestId: string,
        duration: number,
        service: string,
        method: string,
        request: string,
        result: string,
        status: AccessLogWithTelemetryStatus,
        options: AccessLogWithTelemetryOptions|null = null,
    ) {
        this.timestamp = timestamp;
        this.sourceRequestId = sourceRequestId;
        this.requestId = requestId;
        this.duration = duration;
        this.service = service;
        this.method = method;
        this.request = request;
        this.result = result;
        this.status = status;
        this.userId = options?.userId ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.timestamp != null) {
            properties["timestamp"] = this.timestamp;
        }
        if (this.sourceRequestId != null) {
            properties["sourceRequestId"] = this.sourceRequestId;
        }
        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.duration != null) {
            properties["duration"] = this.duration;
        }
        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.method != null) {
            properties["method"] = this.method;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.request != null) {
            properties["request"] = this.request;
        }
        if (this.result != null) {
            properties["result"] = this.result;
        }
        if (this.status != null) {
            properties["status"] = this.status;
        }

        return properties;
    }
}
