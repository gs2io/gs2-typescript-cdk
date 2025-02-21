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
import { BatchRequestPayloadOptions } from "./options/BatchRequestPayloadOptions";
import { BatchRequestPayloadService } from "./enums/BatchRequestPayloadService";

export default class BatchRequestPayload {
    private readonly requestId: string;
    private readonly service: BatchRequestPayloadService;
    private readonly methodName: string;
    private readonly parameter: string;

    public constructor(
        requestId: string,
        service: BatchRequestPayloadService,
        methodName: string,
        parameter: string,
        options: BatchRequestPayloadOptions|null = null,
    ) {
        this.requestId = requestId;
        this.service = service;
        this.methodName = methodName;
        this.parameter = parameter;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.methodName != null) {
            properties["methodName"] = this.methodName;
        }
        if (this.parameter != null) {
            properties["parameter"] = this.parameter;
        }

        return properties;
    }
}
