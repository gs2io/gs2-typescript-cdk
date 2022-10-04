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

export interface JobEntryOptions {
}

export default class JobEntry {
	private readonly scriptId: string;
	private readonly args: string;
	private readonly maxTryCount: number;

    public constructor(
            scriptId: string,
            args: string,
            maxTryCount: number,
            options?: JobEntryOptions,
    ) {
        this.scriptId = scriptId;
        this.args = args;
        this.maxTryCount = maxTryCount;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.scriptId != null) {
            properties["ScriptId"] = this.scriptId;
        }
        if (this.args != null) {
            properties["Args"] = this.args;
        }
        if (this.maxTryCount != null) {
            properties["MaxTryCount"] = this.maxTryCount;
        }
        return properties;
    }
}
