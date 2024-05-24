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
import TargetCounterModel from "./TargetCounterModel";
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import MissionTaskModel from "./MissionTaskModel";
import { MissionGroupModelOptions } from "./options/MissionGroupModelOptions";
import { MissionGroupModelResetTypeIsNotResetOptions } from "./options/MissionGroupModelResetTypeIsNotResetOptions";
import { MissionGroupModelResetTypeIsDailyOptions } from "./options/MissionGroupModelResetTypeIsDailyOptions";
import { MissionGroupModelResetTypeIsWeeklyOptions } from "./options/MissionGroupModelResetTypeIsWeeklyOptions";
import { MissionGroupModelResetTypeIsMonthlyOptions } from "./options/MissionGroupModelResetTypeIsMonthlyOptions";
import { MissionGroupModelResetType } from "./enum/MissionGroupModelResetType";
import { MissionGroupModelResetDayOfWeek } from "./enum/MissionGroupModelResetDayOfWeek";

export default class MissionGroupModel {
    private readonly name: string;
    private readonly resetType: MissionGroupModelResetType;
    private readonly metadata: string|null = null;
    private readonly tasks: MissionTaskModel[]|null = null;
    private readonly resetDayOfMonth: number|null = null;
    private readonly resetDayOfWeek: MissionGroupModelResetDayOfWeek|null = null;
    private readonly resetHour: number|null = null;
    private readonly completeNotificationNamespaceId: string|null = null;

    public constructor(
        name: string,
        resetType: MissionGroupModelResetType,
        options: MissionGroupModelOptions|null = null,
    ) {
        this.name = name;
        this.resetType = resetType;
        this.metadata = options?.metadata ?? null;
        this.tasks = options?.tasks ?? null;
        this.resetDayOfMonth = options?.resetDayOfMonth ?? null;
        this.resetDayOfWeek = options?.resetDayOfWeek ?? null;
        this.resetHour = options?.resetHour ?? null;
        this.completeNotificationNamespaceId = options?.completeNotificationNamespaceId ?? null;
    }

    public static resetTypeIsNotReset(
        name: string,
        options: MissionGroupModelResetTypeIsNotResetOptions|null = null,
    ): MissionGroupModel {
        return new MissionGroupModel(
            name,
            MissionGroupModelResetType.NOT_RESET,
            {
                metadata: options?.metadata,
                tasks: options?.tasks,
                completeNotificationNamespaceId: options?.completeNotificationNamespaceId,
            },
        );
    }

    public static resetTypeIsDaily(
        name: string,
        resetHour: number,
        options: MissionGroupModelResetTypeIsDailyOptions|null = null,
    ): MissionGroupModel {
        return new MissionGroupModel(
            name,
            MissionGroupModelResetType.DAILY,
            {
                resetHour: resetHour,
                metadata: options?.metadata,
                tasks: options?.tasks,
                completeNotificationNamespaceId: options?.completeNotificationNamespaceId,
            },
        );
    }

    public static resetTypeIsWeekly(
        name: string,
        resetDayOfWeek: MissionGroupModelResetDayOfWeek,
        resetHour: number,
        options: MissionGroupModelResetTypeIsWeeklyOptions|null = null,
    ): MissionGroupModel {
        return new MissionGroupModel(
            name,
            MissionGroupModelResetType.WEEKLY,
            {
                resetDayOfWeek: resetDayOfWeek,
                resetHour: resetHour,
                metadata: options?.metadata,
                tasks: options?.tasks,
                completeNotificationNamespaceId: options?.completeNotificationNamespaceId,
            },
        );
    }

    public static resetTypeIsMonthly(
        name: string,
        resetDayOfMonth: number,
        resetHour: number,
        options: MissionGroupModelResetTypeIsMonthlyOptions|null = null,
    ): MissionGroupModel {
        return new MissionGroupModel(
            name,
            MissionGroupModelResetType.MONTHLY,
            {
                resetDayOfMonth: resetDayOfMonth,
                resetHour: resetHour,
                metadata: options?.metadata,
                tasks: options?.tasks,
                completeNotificationNamespaceId: options?.completeNotificationNamespaceId,
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
        if (this.tasks != null) {
            properties["tasks"] = this.tasks.map(v => v.properties(
                ));
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
        if (this.completeNotificationNamespaceId != null) {
            properties["completeNotificationNamespaceId"] = this.completeNotificationNamespaceId;
        }

        return properties;
    }
}
