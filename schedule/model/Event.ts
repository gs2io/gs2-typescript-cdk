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
import RepeatSetting from "./RepeatSetting";
import { EventOptions } from "./options/EventOptions";
import { EventScheduleTypeIsAbsoluteOptions } from "./options/EventScheduleTypeIsAbsoluteOptions";
import { EventScheduleTypeIsRelativeOptions } from "./options/EventScheduleTypeIsRelativeOptions";
import { EventRepeatTypeIsAlwaysOptions } from "./options/EventRepeatTypeIsAlwaysOptions";
import { EventRepeatTypeIsDailyOptions } from "./options/EventRepeatTypeIsDailyOptions";
import { EventRepeatTypeIsWeeklyOptions } from "./options/EventRepeatTypeIsWeeklyOptions";
import { EventRepeatTypeIsMonthlyOptions } from "./options/EventRepeatTypeIsMonthlyOptions";
import { EventScheduleType } from "./enums/EventScheduleType";
import { EventRepeatType } from "./enums/EventRepeatType";
import { EventRepeatBeginDayOfWeek } from "./enums/EventRepeatBeginDayOfWeek";
import { EventRepeatEndDayOfWeek } from "./enums/EventRepeatEndDayOfWeek";

export default class Event {
    private readonly name: string;
    private readonly scheduleType: EventScheduleType;
    private readonly repeatSetting: RepeatSetting;
    private readonly repeatType: EventRepeatType|null = null;
    private readonly metadata: string|null = null;
    private readonly absoluteBegin: number|null = null;
    private readonly absoluteEnd: number|null = null;
    private readonly relativeTriggerName: string|null = null;
    private readonly repeatBeginDayOfMonth: number|null = null;
    private readonly repeatEndDayOfMonth: number|null = null;
    private readonly repeatBeginDayOfWeek: EventRepeatBeginDayOfWeek|null = null;
    private readonly repeatEndDayOfWeek: EventRepeatEndDayOfWeek|null = null;
    private readonly repeatBeginHour: number|null = null;
    private readonly repeatEndHour: number|null = null;

    public constructor(
        name: string,
        scheduleType: EventScheduleType,
        repeatSetting: RepeatSetting,
        options: EventOptions|null = null,
    ) {
        this.name = name;
        this.scheduleType = scheduleType;
        this.repeatSetting = repeatSetting;
        this.repeatType = options?.repeatType ?? null;
        this.metadata = options?.metadata ?? null;
        this.absoluteBegin = options?.absoluteBegin ?? null;
        this.absoluteEnd = options?.absoluteEnd ?? null;
        this.relativeTriggerName = options?.relativeTriggerName ?? null;
        this.repeatBeginDayOfMonth = options?.repeatBeginDayOfMonth ?? null;
        this.repeatEndDayOfMonth = options?.repeatEndDayOfMonth ?? null;
        this.repeatBeginDayOfWeek = options?.repeatBeginDayOfWeek ?? null;
        this.repeatEndDayOfWeek = options?.repeatEndDayOfWeek ?? null;
        this.repeatBeginHour = options?.repeatBeginHour ?? null;
        this.repeatEndHour = options?.repeatEndHour ?? null;
    }

    public static scheduleTypeIsAbsolute(
        name: string,
        repeatSetting: RepeatSetting,
        options: EventScheduleTypeIsAbsoluteOptions|null = null,
    ): Event {
        return new Event(
            name,
            EventScheduleType.ABSOLUTE,
            repeatSetting,
            {
                metadata: options?.metadata,
                absoluteBegin: options?.absoluteBegin,
                absoluteEnd: options?.absoluteEnd,
            },
        );
    }

    public static scheduleTypeIsRelative(
        name: string,
        repeatSetting: RepeatSetting,
        relativeTriggerName: string,
        options: EventScheduleTypeIsRelativeOptions|null = null,
    ): Event {
        return new Event(
            name,
            EventScheduleType.RELATIVE,
            repeatSetting,
            {
                relativeTriggerName: relativeTriggerName,
                metadata: options?.metadata,
                absoluteBegin: options?.absoluteBegin,
                absoluteEnd: options?.absoluteEnd,
            },
        );
    }

    public static repeatTypeIsAlways(
        name: string,
        scheduleType: EventScheduleType,
        repeatSetting: RepeatSetting,
        options: EventRepeatTypeIsAlwaysOptions|null = null,
    ): Event {
        return new Event(
            name,
            scheduleType,
            repeatSetting,
            {
                repeatType: EventRepeatType.ALWAYS,
                metadata: options?.metadata,
                absoluteBegin: options?.absoluteBegin,
                absoluteEnd: options?.absoluteEnd,
            },
        );
    }

    public static repeatTypeIsDaily(
        name: string,
        scheduleType: EventScheduleType,
        repeatSetting: RepeatSetting,
        repeatBeginHour: number,
        repeatEndHour: number,
        options: EventRepeatTypeIsDailyOptions|null = null,
    ): Event {
        return new Event(
            name,
            scheduleType,
            repeatSetting,
            {
                repeatType: EventRepeatType.DAILY,
                repeatBeginHour: repeatBeginHour,
                repeatEndHour: repeatEndHour,
                metadata: options?.metadata,
                absoluteBegin: options?.absoluteBegin,
                absoluteEnd: options?.absoluteEnd,
            },
        );
    }

    public static repeatTypeIsWeekly(
        name: string,
        scheduleType: EventScheduleType,
        repeatSetting: RepeatSetting,
        repeatBeginDayOfWeek: EventRepeatBeginDayOfWeek,
        repeatEndDayOfWeek: EventRepeatEndDayOfWeek,
        repeatBeginHour: number,
        repeatEndHour: number,
        options: EventRepeatTypeIsWeeklyOptions|null = null,
    ): Event {
        return new Event(
            name,
            scheduleType,
            repeatSetting,
            {
                repeatType: EventRepeatType.WEEKLY,
                repeatBeginDayOfWeek: repeatBeginDayOfWeek,
                repeatEndDayOfWeek: repeatEndDayOfWeek,
                repeatBeginHour: repeatBeginHour,
                repeatEndHour: repeatEndHour,
                metadata: options?.metadata,
                absoluteBegin: options?.absoluteBegin,
                absoluteEnd: options?.absoluteEnd,
            },
        );
    }

    public static repeatTypeIsMonthly(
        name: string,
        scheduleType: EventScheduleType,
        repeatSetting: RepeatSetting,
        repeatBeginDayOfMonth: number,
        repeatEndDayOfMonth: number,
        repeatBeginHour: number,
        repeatEndHour: number,
        options: EventRepeatTypeIsMonthlyOptions|null = null,
    ): Event {
        return new Event(
            name,
            scheduleType,
            repeatSetting,
            {
                repeatType: EventRepeatType.MONTHLY,
                repeatBeginDayOfMonth: repeatBeginDayOfMonth,
                repeatEndDayOfMonth: repeatEndDayOfMonth,
                repeatBeginHour: repeatBeginHour,
                repeatEndHour: repeatEndHour,
                metadata: options?.metadata,
                absoluteBegin: options?.absoluteBegin,
                absoluteEnd: options?.absoluteEnd,
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
        if (this.scheduleType != null) {
            properties["scheduleType"] = this.scheduleType;
        }
        if (this.absoluteBegin != null) {
            properties["absoluteBegin"] = this.absoluteBegin;
        }
        if (this.absoluteEnd != null) {
            properties["absoluteEnd"] = this.absoluteEnd;
        }
        if (this.relativeTriggerName != null) {
            properties["relativeTriggerName"] = this.relativeTriggerName;
        }
        if (this.repeatSetting != null) {
            properties["repeatSetting"] = this.repeatSetting?.properties(
            );
        }
        if (this.repeatType != null) {
            properties["repeatType"] = this.repeatType;
        }
        if (this.repeatBeginDayOfMonth != null) {
            properties["repeatBeginDayOfMonth"] = this.repeatBeginDayOfMonth;
        }
        if (this.repeatEndDayOfMonth != null) {
            properties["repeatEndDayOfMonth"] = this.repeatEndDayOfMonth;
        }
        if (this.repeatBeginDayOfWeek != null) {
            properties["repeatBeginDayOfWeek"] = this.repeatBeginDayOfWeek;
        }
        if (this.repeatEndDayOfWeek != null) {
            properties["repeatEndDayOfWeek"] = this.repeatEndDayOfWeek;
        }
        if (this.repeatBeginHour != null) {
            properties["repeatBeginHour"] = this.repeatBeginHour;
        }
        if (this.repeatEndHour != null) {
            properties["repeatEndHour"] = this.repeatEndHour;
        }

        return properties;
    }
}
