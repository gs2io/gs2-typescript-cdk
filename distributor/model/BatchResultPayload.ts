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
import { BatchResultPayloadOptions } from "./options/BatchResultPayloadOptions";

export default class BatchResultPayload {
    private readonly requestId: string;
    private readonly statusCode: number;
    private readonly resultPayload: string;

    public constructor(
        requestId: string,
        statusCode: number,
        resultPayload: string,
        options: BatchResultPayloadOptions|null = null,
    ) {
        this.requestId = requestId;
        this.statusCode = statusCode;
        this.resultPayload = resultPayload;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.requestId != null) {
            properties["requestId"] = this.requestId;
        }
        if (this.statusCode != null) {
            properties["statusCode"] = this.statusCode;
        }
        if (this.resultPayload != null) {
            properties["resultPayload"] = this.resultPayload;
        }

        return properties;
    }
}
