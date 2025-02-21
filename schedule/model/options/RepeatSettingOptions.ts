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
import { RepeatSettingRepeatType } from "../enums/RepeatSettingRepeatType";
import { RepeatSettingBeginDayOfWeek } from "../enums/RepeatSettingBeginDayOfWeek";
import { RepeatSettingEndDayOfWeek } from "../enums/RepeatSettingEndDayOfWeek";

export interface RepeatSettingOptions {
    beginDayOfMonth?: number|null;
    endDayOfMonth?: number|null;
    beginDayOfWeek?: RepeatSettingBeginDayOfWeek|null;
    endDayOfWeek?: RepeatSettingEndDayOfWeek|null;
    beginHour?: number|null;
    endHour?: number|null;
    anchorTimestamp?: number|null;
    activeDays?: number|null;
    inactiveDays?: number|null;
}

