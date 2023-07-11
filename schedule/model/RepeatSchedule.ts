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
import { RepeatScheduleOptions } from "./options/RepeatScheduleOptions";

export default class RepeatSchedule {
    private readonly repeatCount: number;
    private readonly currentRepeatStartAt: number|null = null;
    private readonly currentRepeatEndAt: number|null = null;
    private readonly lastRepeatEndAt: number|null = null;
    private readonly nextRepeatStartAt: number|null = null;

    public constructor(
        repeatCount: number,
        options: RepeatScheduleOptions|null = null,
    ) {
        this.repeatCount = repeatCount;
        this.currentRepeatStartAt = options?.currentRepeatStartAt ?? null;
        this.currentRepeatEndAt = options?.currentRepeatEndAt ?? null;
        this.lastRepeatEndAt = options?.lastRepeatEndAt ?? null;
        this.nextRepeatStartAt = options?.nextRepeatStartAt ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.repeatCount != null) {
            properties["repeatCount"] = this.repeatCount;
        }
        if (this.currentRepeatStartAt != null) {
            properties["currentRepeatStartAt"] = this.currentRepeatStartAt;
        }
        if (this.currentRepeatEndAt != null) {
            properties["currentRepeatEndAt"] = this.currentRepeatEndAt;
        }
        if (this.lastRepeatEndAt != null) {
            properties["lastRepeatEndAt"] = this.lastRepeatEndAt;
        }
        if (this.nextRepeatStartAt != null) {
            properties["nextRepeatStartAt"] = this.nextRepeatStartAt;
        }

        return properties;
    }
}
