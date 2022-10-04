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
import { AcquireAction } from "../../core/model";

export interface BoxItemOptions {
    acquireActions?: AcquireAction[]|null|undefined;
}

export default class BoxItem {
    private readonly acquireActions: AcquireAction[]|null = null;
	private readonly remaining: number;
	private readonly initial: number;

    public constructor(
            remaining: number,
            initial: number,
            options?: BoxItemOptions,
    ) {
        this.acquireActions = options?.acquireActions ?? null;
        this.remaining = remaining;
        this.initial = initial;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.acquireActions != null) {
            properties["AcquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.remaining != null) {
            properties["Remaining"] = this.remaining;
        }
        if (this.initial != null) {
            properties["Initial"] = this.initial;
        }
        return properties;
    }
}
