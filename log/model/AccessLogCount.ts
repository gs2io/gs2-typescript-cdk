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
import { AccessLogCountOptions } from "./options/AccessLogCountOptions";

export default class AccessLogCount {
    private readonly count: number;
    private readonly service: string|null = null;
    private readonly method: string|null = null;
    private readonly userId: string|null = null;

    public constructor(
        count: number,
        options: AccessLogCountOptions|null = null,
    ) {
        this.count = count;
        this.service = options?.service ?? null;
        this.method = options?.method ?? null;
        this.userId = options?.userId ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.service != null) {
            properties["service"] = this.service;
        }
        if (this.method != null) {
            properties["method"] = this.method;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }

        return properties;
    }
}
