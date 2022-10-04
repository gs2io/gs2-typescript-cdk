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
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";

export interface SalesItemOptions {
    metadata?: string|null|undefined;
}

export default class SalesItem {
	private readonly name: string;
    private readonly metadata: string|null = null;
	private readonly consumeActions: ConsumeAction[];
	private readonly acquireActions: AcquireAction[];

    public constructor(
            name: string,
            consumeActions: ConsumeAction[],
            acquireActions: AcquireAction[],
            options?: SalesItemOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.consumeActions = consumeActions;
        this.acquireActions = acquireActions;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.consumeActions != null) {
            properties["ConsumeActions"] = this.consumeActions.map(v => v.properties());
        }
        if (this.acquireActions != null) {
            properties["AcquireActions"] = this.acquireActions.map(v => v.properties());
        }
        return properties;
    }
}
