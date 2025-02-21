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
 *
 * deny overwrite
 */
import { ScopedValueOptions } from "./options/ScopedValueOptions";
import { ScopedValueScopeTypeIsResetTimingOptions } from "./options/ScopedValueScopeTypeIsResetTimingOptions";
import { ScopedValueScopeTypeIsVerifyActionOptions } from "./options/ScopedValueScopeTypeIsVerifyActionOptions";
import { ScopedValueScopeType } from "./enums/ScopedValueScopeType";
import { ScopedValueResetType } from "./enums/ScopedValueResetType";

export default class ScopedValue {
    private readonly scopeType: ScopedValueScopeType;
    private readonly value: number;
    private readonly resetType: ScopedValueResetType|null = null;
    private readonly conditionName: string|null = null;
    private readonly nextResetAt: number|null = null;

    public constructor(
        scopeType: ScopedValueScopeType,
        value: number,
        options: ScopedValueOptions|null = null,
    ) {
        this.scopeType = scopeType;
        this.value = value;
        this.resetType = options?.resetType ?? null;
        this.conditionName = options?.conditionName ?? null;
        this.nextResetAt = options?.nextResetAt ?? null;
    }

    public static scopeTypeIsResetTiming(
        value: number,
        resetType: ScopedValueResetType,
        options: ScopedValueScopeTypeIsResetTimingOptions|null = null,
    ): ScopedValue {
        return new ScopedValue(
            ScopedValueScopeType.RESET_TIMING,
            value,
            {
                resetType: resetType,
                nextResetAt: options?.nextResetAt,
            },
        );
    }

    public static scopeTypeIsVerifyAction(
        value: number,
        conditionName: string,
        options: ScopedValueScopeTypeIsVerifyActionOptions|null = null,
    ): ScopedValue {
        return new ScopedValue(
            ScopedValueScopeType.VERIFY_ACTION,
            value,
            {
                conditionName: conditionName,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.scopeType != null) {
            properties["scopeType"] = this.scopeType;
        }
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.conditionName != null) {
            properties["conditionName"] = this.conditionName;
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
