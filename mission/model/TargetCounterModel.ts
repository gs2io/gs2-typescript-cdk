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
import { TargetCounterModelResetType } from "./enum/TargetCounterModelResetType";

export default class TargetCounterModel {
    private readonly counterName: string;
    private readonly value: number;
    private readonly resetType: TargetCounterModelResetType|null = null;

    public constructor(
        counterName: string,
        value: number,
        options: TargetCounterModelOptions|null = null,
    ) {
        this.counterName = counterName;
        this.value = value;
        this.resetType = options?.resetType ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }

        return properties;
    }
}
