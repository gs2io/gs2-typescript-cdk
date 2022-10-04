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

export interface ExecuteStampSheetLogCountOptions {
    service?: string|null|undefined;
    method?: string|null|undefined;
    userId?: string|null|undefined;
    action?: string|null|undefined;
}

export default class ExecuteStampSheetLogCount {
    private readonly service: string|null = null;
    private readonly method: string|null = null;
    private readonly userId: string|null = null;
    private readonly action: string|null = null;
	private readonly count: number;

    public constructor(
            count: number,
            options?: ExecuteStampSheetLogCountOptions,
    ) {
        this.service = options?.service ?? null;
        this.method = options?.method ?? null;
        this.userId = options?.userId ?? null;
        this.action = options?.action ?? null;
        this.count = count;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.service != null) {
            properties["Service"] = this.service;
        }
        if (this.method != null) {
            properties["Method"] = this.method;
        }
        if (this.userId != null) {
            properties["UserId"] = this.userId;
        }
        if (this.action != null) {
            properties["Action"] = this.action;
        }
        if (this.count != null) {
            properties["Count"] = this.count;
        }
        return properties;
    }
}
