/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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

export interface AccessLogOptions {
    userId?: string|null|undefined;
}

export default class AccessLog {
	private readonly timestamp: number;
	private readonly requestId: string;
	private readonly service: string;
	private readonly method: string;
    private readonly userId: string|null = null;
	private readonly request: string;
	private readonly result: string;

    public constructor(
            timestamp: number,
            requestId: string,
            service: string,
            method: string,
            request: string,
            result: string,
            options?: AccessLogOptions,
    ) {
        this.timestamp = timestamp;
        this.requestId = requestId;
        this.service = service;
        this.method = method;
        this.userId = options?.userId ?? null;
        this.request = request;
        this.result = result;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.timestamp != null) {
            properties["Timestamp"] = this.timestamp;
        }
        if (this.requestId != null) {
            properties["RequestId"] = this.requestId;
        }
        if (this.service != null) {
            properties["Service"] = this.service;
        }
        if (this.method != null) {
            properties["Method"] = this.method;
        }
        if (this.userId != null) {
            properties["UserId"] = this.userId;
        }
        if (this.request != null) {
            properties["Request"] = this.request;
        }
        if (this.result != null) {
            properties["Result"] = this.result;
        }
        return properties;
    }
}
