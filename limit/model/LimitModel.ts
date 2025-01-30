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
import { LimitModelOptions } from "./options/LimitModelOptions";
import { LimitModelResetTypeIsNotResetOptions } from "./options/LimitModelResetTypeIsNotResetOptions";
import { LimitModelResetTypeIsDailyOptions } from "./options/LimitModelResetTypeIsDailyOptions";
import { LimitModelResetTypeIsWeeklyOptions } from "./options/LimitModelResetTypeIsWeeklyOptions";
import { LimitModelResetTypeIsMonthlyOptions } from "./options/LimitModelResetTypeIsMonthlyOptions";
import { LimitModelResetTypeIsDaysOptions } from "./options/LimitModelResetTypeIsDaysOptions";
import { LimitModelResetType } from "./enum/LimitModelResetType";
import { LimitModelResetDayOfWeek } from "./enum/LimitModelResetDayOfWeek";

export default class LimitModel {
    private readonly name: string;
    private readonly resetType: LimitModelResetType;
    private readonly metadata: string|null = null;
    private readonly resetDayOfMonth: number|null = null;
    private readonly resetDayOfWeek: LimitModelResetDayOfWeek|null = null;
    private readonly resetHour: number|null = null;
    private readonly anchorTimestamp: number|null = null;
    private readonly days: number|null = null;

    public constructor(
        name: string,
        resetType: LimitModelResetType,
        options: LimitModelOptions|null = null,
    ) {
        this.name = name;
        this.resetType = resetType;
        this.metadata = options?.metadata ?? null;
        this.resetDayOfMonth = options?.resetDayOfMonth ?? null;
        this.resetDayOfWeek = options?.resetDayOfWeek ?? null;
        this.resetHour = options?.resetHour ?? null;
        this.anchorTimestamp = options?.anchorTimestamp ?? null;
        this.days = options?.days ?? null;
    }

    public static resetTypeIsNotReset(
        name: string,
        options: LimitModelResetTypeIsNotResetOptions|null = null,
    ): LimitModel {
        return new LimitModel(
            name,
            LimitModelResetType.NOT_RESET,
            {
                metadata: options?.metadata,
            },
        );
    }

    public static resetTypeIsDaily(
        name: string,
        resetHour: number,
        options: LimitModelResetTypeIsDailyOptions|null = null,
    ): LimitModel {
        return new LimitModel(
            name,
            LimitModelResetType.DAILY,
            {
                resetHour: resetHour,
                metadata: options?.metadata,
            },
        );
    }

    public static resetTypeIsWeekly(
        name: string,
        resetDayOfWeek: LimitModelResetDayOfWeek,
        resetHour: number,
        options: LimitModelResetTypeIsWeeklyOptions|null = null,
    ): LimitModel {
        return new LimitModel(
            name,
            LimitModelResetType.WEEKLY,
            {
                resetDayOfWeek: resetDayOfWeek,
                resetHour: resetHour,
                metadata: options?.metadata,
            },
        );
    }

    public static resetTypeIsMonthly(
        name: string,
        resetDayOfMonth: number,
        resetHour: number,
        options: LimitModelResetTypeIsMonthlyOptions|null = null,
    ): LimitModel {
        return new LimitModel(
            name,
            LimitModelResetType.MONTHLY,
            {
                resetDayOfMonth: resetDayOfMonth,
                resetHour: resetHour,
                metadata: options?.metadata,
            },
        );
    }

    public static resetTypeIsDays(
        name: string,
        anchorTimestamp: number,
        days: number,
        options: LimitModelResetTypeIsDaysOptions|null = null,
    ): LimitModel {
        return new LimitModel(
            name,
            LimitModelResetType.DAYS,
            {
                anchorTimestamp: anchorTimestamp,
                days: days,
                metadata: options?.metadata,
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
        if (this.anchorTimestamp != null) {
            properties["anchorTimestamp"] = this.anchorTimestamp;
        }
        if (this.days != null) {
            properties["days"] = this.days;
        }

        return properties;
    }
}
