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
import { AcquireAction } from "../../core/model";
import { ContentsOptions } from "./options/ContentsOptions";

export default class Contents {
    private readonly weight: number;
    private readonly metadata: string|null = null;
    private readonly completeAcquireActions: AcquireAction[]|null = null;

    public constructor(
        weight: number,
        options: ContentsOptions|null = null,
    ) {
        this.weight = weight;
        this.metadata = options?.metadata ?? null;
        this.completeAcquireActions = options?.completeAcquireActions ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.completeAcquireActions != null) {
            properties["completeAcquireActions"] = this.completeAcquireActions.map(v => v.properties(
                ));
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }

        return properties;
    }
}
