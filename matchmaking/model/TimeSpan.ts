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
import { TimeSpanOptions } from "./options/TimeSpanOptions";

export default class TimeSpan {
    private readonly days: number;
    private readonly hours: number;
    private readonly minutes: number;

    public constructor(
        days: number,
        hours: number,
        minutes: number,
        options: TimeSpanOptions|null = null,
    ) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.days != null) {
            properties["days"] = this.days;
        }
        if (this.hours != null) {
            properties["hours"] = this.hours;
        }
        if (this.minutes != null) {
            properties["minutes"] = this.minutes;
        }

        return properties;
    }
}
