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
import { CounterScopeModelOptions } from "./options/CounterScopeModelOptions";
import { CounterScopeModelResetTypeIsNotResetOptions } from "./options/CounterScopeModelResetTypeIsNotResetOptions";
import { CounterScopeModelResetTypeIsDailyOptions } from "./options/CounterScopeModelResetTypeIsDailyOptions";
import { CounterScopeModelResetTypeIsWeeklyOptions } from "./options/CounterScopeModelResetTypeIsWeeklyOptions";
import { CounterScopeModelResetTypeIsMonthlyOptions } from "./options/CounterScopeModelResetTypeIsMonthlyOptions";
import { CounterScopeModelResetTypeIsDaysOptions } from "./options/CounterScopeModelResetTypeIsDaysOptions";
import { CounterScopeModelScopeTypeIsResetTimingOptions } from "./options/CounterScopeModelScopeTypeIsResetTimingOptions";
import { CounterScopeModelScopeTypeIsVerifyActionOptions } from "./options/CounterScopeModelScopeTypeIsVerifyActionOptions";
import { CounterScopeModelScopeType } from "./enums/CounterScopeModelScopeType";
import { CounterScopeModelResetType } from "./enums/CounterScopeModelResetType";
import { CounterScopeModelResetDayOfWeek } from "./enums/CounterScopeModelResetDayOfWeek";

export default class CounterScopeModel {
    private readonly scopeType: CounterScopeModelScopeType;
    private readonly resetType: CounterScopeModelResetType;
    private readonly resetDayOfMonth: number|null = null;
    private readonly resetDayOfWeek: CounterScopeModelResetDayOfWeek|null = null;
    private readonly resetHour: number|null = null;
    private readonly conditionName: string|null = null;
    private readonly condition: VerifyAction|null = null;
    private readonly anchorTimestamp: number|null = null;
    private readonly days: number|null = null;

    public constructor(
        scopeType: CounterScopeModelScopeType,
        resetType: CounterScopeModelResetType,
        options: CounterScopeModelOptions|null = null,
    ) {
        this.scopeType = scopeType;
        this.resetType = resetType;
        this.resetDayOfMonth = options?.resetDayOfMonth ?? null;
        this.resetDayOfWeek = options?.resetDayOfWeek ?? null;
        this.resetHour = options?.resetHour ?? null;
        this.conditionName = options?.conditionName ?? null;
        this.condition = options?.condition ?? null;
        this.anchorTimestamp = options?.anchorTimestamp ?? null;
        this.days = options?.days ?? null;
    }

    public static resetTypeIsNotReset(
        scopeType: CounterScopeModelScopeType,
        options: CounterScopeModelResetTypeIsNotResetOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            scopeType,
            CounterScopeModelResetType.NOT_RESET,
            {
            },
        );
    }

    public static resetTypeIsDaily(
        scopeType: CounterScopeModelScopeType,
        resetHour: number,
        options: CounterScopeModelResetTypeIsDailyOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            scopeType,
            CounterScopeModelResetType.DAILY,
            {
                resetHour: resetHour,
            },
        );
    }

    public static resetTypeIsWeekly(
        scopeType: CounterScopeModelScopeType,
        resetDayOfWeek: CounterScopeModelResetDayOfWeek,
        resetHour: number,
        options: CounterScopeModelResetTypeIsWeeklyOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            scopeType,
            CounterScopeModelResetType.WEEKLY,
            {
                resetDayOfWeek: resetDayOfWeek,
                resetHour: resetHour,
            },
        );
    }

    public static resetTypeIsMonthly(
        scopeType: CounterScopeModelScopeType,
        resetDayOfMonth: number,
        resetHour: number,
        options: CounterScopeModelResetTypeIsMonthlyOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            scopeType,
            CounterScopeModelResetType.MONTHLY,
            {
                resetDayOfMonth: resetDayOfMonth,
                resetHour: resetHour,
            },
        );
    }

    public static resetTypeIsDays(
        scopeType: CounterScopeModelScopeType,
        anchorTimestamp: number,
        days: number,
        options: CounterScopeModelResetTypeIsDaysOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            scopeType,
            CounterScopeModelResetType.DAYS,
            {
                anchorTimestamp: anchorTimestamp,
                days: days,
            },
        );
    }

    public static scopeTypeIsResetTiming(
        resetType: CounterScopeModelResetType,
        options: CounterScopeModelScopeTypeIsResetTimingOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            CounterScopeModelScopeType.RESET_TIMING,
            resetType,
            {
            },
        );
    }

    public static scopeTypeIsVerifyAction(
        resetType: CounterScopeModelResetType,
        conditionName: string,
        condition: VerifyAction,
        options: CounterScopeModelScopeTypeIsVerifyActionOptions|null = null,
    ): CounterScopeModel {
        return new CounterScopeModel(
            CounterScopeModelScopeType.VERIFY_ACTION,
            resetType,
            {
                conditionName: conditionName,
                condition: condition,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.scopeType != null) {
            properties["scopeType"] = this.scopeType;
        }
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
        if (this.conditionName != null) {
            properties["conditionName"] = this.conditionName;
        }
        if (this.condition != null) {
            properties["condition"] = this.condition?.properties(
            );
        }
        if (this.anchorTimestamp != null) {
            properties["anchorTimestamp"] = this.anchorTimestamp;
        }
        if (this.days != null) {
            properties["days"] = this.days;
        }

        return properties;
    }
}
