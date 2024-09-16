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
import { TargetCounterModelOptions } from "./options/TargetCounterModelOptions";
import { TargetCounterModelScopeTypeIsResetTimingOptions } from "./options/TargetCounterModelScopeTypeIsResetTimingOptions";
import { TargetCounterModelScopeTypeIsVerifyActionOptions } from "./options/TargetCounterModelScopeTypeIsVerifyActionOptions";
import { TargetCounterModelScopeType } from "./enum/TargetCounterModelScopeType";
import { TargetCounterModelResetType } from "./enum/TargetCounterModelResetType";

export default class TargetCounterModel {
    private readonly counterName: string;
    private readonly scopeType: TargetCounterModelScopeType;
    private readonly value: number;
    private readonly resetType: TargetCounterModelResetType|null = null;
    private readonly conditionName: string|null = null;

    public constructor(
        counterName: string,
        scopeType: TargetCounterModelScopeType,
        value: number,
        options: TargetCounterModelOptions|null = null,
    ) {
        this.counterName = counterName;
        this.scopeType = scopeType;
        this.value = value;
        this.resetType = options?.resetType ?? null;
        this.conditionName = options?.conditionName ?? null;
    }

    public static scopeTypeIsResetTiming(
        counterName: string,
        value: number,
        options: TargetCounterModelScopeTypeIsResetTimingOptions|null = null,
    ): TargetCounterModel {
        return new TargetCounterModel(
            counterName,
            TargetCounterModelScopeType.RESET_TIMING,
            value,
            {
                resetType: options?.resetType,
            },
        );
    }

    public static scopeTypeIsVerifyAction(
        counterName: string,
        value: number,
        conditionName: string,
        options: TargetCounterModelScopeTypeIsVerifyActionOptions|null = null,
    ): TargetCounterModel {
        return new TargetCounterModel(
            counterName,
            TargetCounterModelScopeType.VERIFY_ACTION,
            value,
            {
                conditionName: conditionName,
                resetType: options?.resetType,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
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

        return properties;
    }
}
