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
import { RepeatSettingOptions } from "./options/RepeatSettingOptions";
import { RepeatSettingRepeatTypeIsAlwaysOptions } from "./options/RepeatSettingRepeatTypeIsAlwaysOptions";
import { RepeatSettingRepeatTypeIsDailyOptions } from "./options/RepeatSettingRepeatTypeIsDailyOptions";
import { RepeatSettingRepeatTypeIsWeeklyOptions } from "./options/RepeatSettingRepeatTypeIsWeeklyOptions";
import { RepeatSettingRepeatTypeIsMonthlyOptions } from "./options/RepeatSettingRepeatTypeIsMonthlyOptions";
import { RepeatSettingRepeatType } from "./enum/RepeatSettingRepeatType";
import { RepeatSettingBeginDayOfWeek } from "./enum/RepeatSettingBeginDayOfWeek";
import { RepeatSettingEndDayOfWeek } from "./enum/RepeatSettingEndDayOfWeek";

export default class RepeatSetting {
    private readonly repeatType: RepeatSettingRepeatType;
    private readonly beginDayOfMonth: number|null = null;
    private readonly endDayOfMonth: number|null = null;
    private readonly beginDayOfWeek: RepeatSettingBeginDayOfWeek|null = null;
    private readonly endDayOfWeek: RepeatSettingEndDayOfWeek|null = null;
    private readonly beginHour: number|null = null;
    private readonly endHour: number|null = null;

    public constructor(
        repeatType: RepeatSettingRepeatType,
        options: RepeatSettingOptions|null = null,
    ) {
        this.repeatType = repeatType;
        this.beginDayOfMonth = options?.beginDayOfMonth ?? null;
        this.endDayOfMonth = options?.endDayOfMonth ?? null;
        this.beginDayOfWeek = options?.beginDayOfWeek ?? null;
        this.endDayOfWeek = options?.endDayOfWeek ?? null;
        this.beginHour = options?.beginHour ?? null;
        this.endHour = options?.endHour ?? null;
    }

    public static repeatTypeIsAlways(
        options: RepeatSettingRepeatTypeIsAlwaysOptions|null = null,
    ): RepeatSetting {
        return new RepeatSetting(
            RepeatSettingRepeatType.ALWAYS,
            {
            },
        );
    }

    public static repeatTypeIsDaily(
        beginHour: number,
        endHour: number,
        options: RepeatSettingRepeatTypeIsDailyOptions|null = null,
    ): RepeatSetting {
        return new RepeatSetting(
            RepeatSettingRepeatType.DAILY,
            {
                beginHour: beginHour,
                endHour: endHour,
            },
        );
    }

    public static repeatTypeIsWeekly(
        beginDayOfWeek: RepeatSettingBeginDayOfWeek,
        endDayOfWeek: RepeatSettingEndDayOfWeek,
        beginHour: number,
        endHour: number,
        options: RepeatSettingRepeatTypeIsWeeklyOptions|null = null,
    ): RepeatSetting {
        return new RepeatSetting(
            RepeatSettingRepeatType.WEEKLY,
            {
                beginDayOfWeek: beginDayOfWeek,
                endDayOfWeek: endDayOfWeek,
                beginHour: beginHour,
                endHour: endHour,
            },
        );
    }

    public static repeatTypeIsMonthly(
        beginDayOfMonth: number,
        endDayOfMonth: number,
        beginHour: number,
        endHour: number,
        options: RepeatSettingRepeatTypeIsMonthlyOptions|null = null,
    ): RepeatSetting {
        return new RepeatSetting(
            RepeatSettingRepeatType.MONTHLY,
            {
                beginDayOfMonth: beginDayOfMonth,
                endDayOfMonth: endDayOfMonth,
                beginHour: beginHour,
                endHour: endHour,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.repeatType != null) {
            properties["repeatType"] = this.repeatType;
        }
        if (this.beginDayOfMonth != null) {
            properties["beginDayOfMonth"] = this.beginDayOfMonth;
        }
        if (this.endDayOfMonth != null) {
            properties["endDayOfMonth"] = this.endDayOfMonth;
        }
        if (this.beginDayOfWeek != null) {
            properties["beginDayOfWeek"] = this.beginDayOfWeek;
        }
        if (this.endDayOfWeek != null) {
            properties["endDayOfWeek"] = this.endDayOfWeek;
        }
        if (this.beginHour != null) {
            properties["beginHour"] = this.beginHour;
        }
        if (this.endHour != null) {
            properties["endHour"] = this.endHour;
        }

        return properties;
    }
}
