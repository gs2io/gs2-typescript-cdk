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
import { MissionTaskModelOptions } from "./options/MissionTaskModelOptions";

export default class MissionTaskModel {
    private readonly name: string;
    private readonly counterName: string;
    private readonly targetValue: number;
    private readonly metadata: string|null = null;
    private readonly completeAcquireActions: AcquireAction[]|null = null;
    private readonly challengePeriodEventId: string|null = null;
    private readonly premiseMissionTaskName: string|null = null;

    public constructor(
        name: string,
        counterName: string,
        targetValue: number,
        options: MissionTaskModelOptions|null = null,
    ) {
        this.name = name;
        this.counterName = counterName;
        this.targetValue = targetValue;
        this.metadata = options?.metadata ?? null;
        this.completeAcquireActions = options?.completeAcquireActions ?? null;
        this.challengePeriodEventId = options?.challengePeriodEventId ?? null;
        this.premiseMissionTaskName = options?.premiseMissionTaskName ?? null;
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
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.targetValue != null) {
            properties["targetValue"] = this.targetValue;
        }
        if (this.completeAcquireActions != null) {
            properties["completeAcquireActions"] = this.completeAcquireActions.map(v => v.properties(
                ));
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        if (this.premiseMissionTaskName != null) {
            properties["premiseMissionTaskName"] = this.premiseMissionTaskName;
        }

        return properties;
    }
}
