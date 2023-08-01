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
import { ScopedValueOptions } from "./options/ScopedValueOptions";
import { ScopedValueResetType } from "./enum/ScopedValueResetType";

export default class ScopedValue {
    private readonly resetType: ScopedValueResetType;
    private readonly value: number;
    private readonly nextResetAt: number|null = null;

    public constructor(
        resetType: ScopedValueResetType,
        value: number,
        options: ScopedValueOptions|null = null,
    ) {
        this.resetType = resetType;
        this.value = value;
        this.nextResetAt = options?.nextResetAt ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        if (this.nextResetAt != null) {
            properties["nextResetAt"] = this.nextResetAt;
        }

        return properties;
    }
}
