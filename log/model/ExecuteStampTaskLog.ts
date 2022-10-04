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

export interface ExecuteStampTaskLogOptions {
}

export default class ExecuteStampTaskLog {
	private readonly timestamp: number;
	private readonly taskId: string;
	private readonly service: string;
	private readonly method: string;
	private readonly userId: string;
	private readonly action: string;
	private readonly args: string;

    public constructor(
            timestamp: number,
            taskId: string,
            service: string,
            method: string,
            userId: string,
            action: string,
            args: string,
            options?: ExecuteStampTaskLogOptions,
    ) {
        this.timestamp = timestamp;
        this.taskId = taskId;
        this.service = service;
        this.method = method;
        this.userId = userId;
        this.action = action;
        this.args = args;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.timestamp != null) {
            properties["Timestamp"] = this.timestamp;
        }
        if (this.taskId != null) {
            properties["TaskId"] = this.taskId;
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
        if (this.action != null) {
            properties["Action"] = this.action;
        }
        if (this.args != null) {
            properties["Args"] = this.args;
        }
        return properties;
    }
}
