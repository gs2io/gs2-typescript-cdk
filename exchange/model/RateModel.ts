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
import { VerifyAction } from "../../core/model";
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import { RateModelOptions } from "./options/RateModelOptions";
import { RateModelTimingTypeIsImmediateOptions } from "./options/RateModelTimingTypeIsImmediateOptions";
import { RateModelTimingTypeIsAwaitOptions } from "./options/RateModelTimingTypeIsAwaitOptions";
import { RateModelTimingType } from "./enum/RateModelTimingType";

export default class RateModel {
    private readonly name: string;
    private readonly timingType: RateModelTimingType;
    private readonly metadata: string|null = null;
    private readonly verifyActions: VerifyAction[]|null = null;
    private readonly consumeActions: ConsumeAction[]|null = null;
    private readonly lockTime: number|null = null;
    private readonly acquireActions: AcquireAction[]|null = null;

    public constructor(
        name: string,
        timingType: RateModelTimingType,
        options: RateModelOptions|null = null,
    ) {
        this.name = name;
        this.timingType = timingType;
        this.metadata = options?.metadata ?? null;
        this.verifyActions = options?.verifyActions ?? null;
        this.consumeActions = options?.consumeActions ?? null;
        this.lockTime = options?.lockTime ?? null;
        this.acquireActions = options?.acquireActions ?? null;
    }

    public static timingTypeIsImmediate(
        name: string,
        options: RateModelTimingTypeIsImmediateOptions|null = null,
    ): RateModel {
        return new RateModel(
            name,
            RateModelTimingType.IMMEDIATE,
            {
                metadata: options?.metadata,
                verifyActions: options?.verifyActions,
                consumeActions: options?.consumeActions,
                acquireActions: options?.acquireActions,
            },
        );
    }

    public static timingTypeIsAwait(
        name: string,
        lockTime: number,
        options: RateModelTimingTypeIsAwaitOptions|null = null,
    ): RateModel {
        return new RateModel(
            name,
            RateModelTimingType.AWAIT,
            {
                lockTime: lockTime,
                metadata: options?.metadata,
                verifyActions: options?.verifyActions,
                consumeActions: options?.consumeActions,
                acquireActions: options?.acquireActions,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.verifyActions != null) {
            properties["verifyActions"] = this.verifyActions.map(v => v.properties(
                ));
        }
        if (this.consumeActions != null) {
            properties["consumeActions"] = this.consumeActions.map(v => v.properties(
                ));
        }
        if (this.timingType != null) {
            properties["timingType"] = this.timingType;
        }
        if (this.lockTime != null) {
            properties["lockTime"] = this.lockTime;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties(
                ));
        }

        return properties;
    }
}
