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
import AcquireActionList from "./AcquireActionList";
import { CategoryModelOptions } from "./options/CategoryModelOptions";

export default class CategoryModel {
    private readonly name: string;
    private readonly rewardIntervalMinutes: number;
    private readonly defaultMaximumIdleMinutes: number;
    private readonly acquireActions: AcquireActionList[];
    private readonly metadata: string|null = null;
    private readonly idlePeriodScheduleId: string|null = null;
    private readonly receivePeriodScheduleId: string|null = null;

    public constructor(
        name: string,
        rewardIntervalMinutes: number,
        defaultMaximumIdleMinutes: number,
        acquireActions: AcquireActionList[],
        options: CategoryModelOptions|null = null,
    ) {
        this.name = name;
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        this.acquireActions = acquireActions;
        this.metadata = options?.metadata ?? null;
        this.idlePeriodScheduleId = options?.idlePeriodScheduleId ?? null;
        this.receivePeriodScheduleId = options?.receivePeriodScheduleId ?? null;
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
        if (this.rewardIntervalMinutes != null) {
            properties["rewardIntervalMinutes"] = this.rewardIntervalMinutes;
        }
        if (this.defaultMaximumIdleMinutes != null) {
            properties["defaultMaximumIdleMinutes"] = this.defaultMaximumIdleMinutes;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties(
                ));
        }
        if (this.idlePeriodScheduleId != null) {
            properties["idlePeriodScheduleId"] = this.idlePeriodScheduleId;
        }
        if (this.receivePeriodScheduleId != null) {
            properties["receivePeriodScheduleId"] = this.receivePeriodScheduleId;
        }

        return properties;
    }
}
