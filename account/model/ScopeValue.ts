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
import { ScopeValueOptions } from "./options/ScopeValueOptions";

export default class ScopeValue {
    private readonly key: string;
    private readonly value: string|null = null;

    public constructor(
        key: string,
        options: ScopeValueOptions|null = null,
    ) {
        this.key = key;
        this.value = options?.value ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.key != null) {
            properties["key"] = this.key;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }

        return properties;
    }
}
