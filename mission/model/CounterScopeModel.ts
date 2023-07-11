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
import { CounterScopeModelOptions } from "./options/CounterScopeModelOptions";
import { CounterScopeModelResetTypeIsNotResetOptions } from "./options/CounterScopeModelResetTypeIsNotResetOptions";
import { CounterScopeModelResetTypeIsDailyOptions } from "./options/CounterScopeModelResetTypeIsDailyOptions";
import { CounterScopeModelResetTypeIsWeeklyOptions } from "./options/CounterScopeModelResetTypeIsWeeklyOptions";
import { CounterScopeModelResetTypeIsMonthlyOptions } from "./options/CounterScopeModelResetTypeIsMonthlyOptions";
import { CounterScopeModelResetType } from "./enum/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "./enum/CounterScopeModelResetDayOfWeek";

export default class CounterScopeModel {
    private readonly resetType: CounterScopeModelResetType;
    private readonly resetDayOfMonth: number|null = null;
    private readonly resetDayOfWeek: CounterScopeModelResetDayOfWeek|null = null;
    private readonly resetHour: number|null = null;

    public constructor(
        resetType: CounterScopeModelResetType,
        options: CounterScopeModelOptions|null = null,
    ) {
        this.resetType = resetType;
        this.resetDayOfMonth = options?.resetDayOfMonth ?? null;
        this.resetDayOfWeek = options?.resetDayOfWeek ?? null;
        this.resetHour = options?.resetHour ?? null;
    }

    public static resetTypeIsNotReset(
        options: CounterScopeModelResetTypeIsNotResetOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            CounterScopeModelResetType.NOT_RESET,
            {
            },
        );
    }

    public static resetTypeIsDaily(
        resetHour: number,
        options: CounterScopeModelResetTypeIsDailyOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            CounterScopeModelResetType.DAILY,
            {
                resetHour: resetHour,
            },
        );
    }

    public static resetTypeIsWeekly(
        resetDayOfWeek: CounterScopeModelResetDayOfWeek,
        resetHour: number,
        options: CounterScopeModelResetTypeIsWeeklyOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            CounterScopeModelResetType.WEEKLY,
            {
                resetDayOfWeek: resetDayOfWeek,
                resetHour: resetHour,
            },
        );
    }

    public static resetTypeIsMonthly(
        resetDayOfMonth: number,
        resetHour: number,
        options: CounterScopeModelResetTypeIsMonthlyOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            CounterScopeModelResetType.MONTHLY,
            {
                resetDayOfMonth: resetDayOfMonth,
                resetHour: resetHour,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.resetType != null) {
            properties["resetType"] = this.resetType;
        }
        if (this.resetDayOfMonth != null) {
            properties["resetDayOfMonth"] = this.resetDayOfMonth;
        }
        if (this.resetDayOfWeek != null) {
            properties["resetDayOfWeek"] = this.resetDayOfWeek;
        }
        if (this.resetHour != null) {
            properties["resetHour"] = this.resetHour;
        }

        return properties;
    }
}
