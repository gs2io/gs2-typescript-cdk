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
import Reward from "./Reward";
import { ConsumeAction } from "../../core/model";
import { BonusModelOptions } from "./options/BonusModelOptions";
import { BonusModelModeIsScheduleOptions } from "./options/BonusModelModeIsScheduleOptions";
import { BonusModelModeIsStreamingOptions } from "./options/BonusModelModeIsStreamingOptions";
import { BonusModelMissedReceiveReliefIsEnabledOptions } from "./options/BonusModelMissedReceiveReliefIsEnabledOptions";
import { BonusModelMissedReceiveReliefIsDisabledOptions } from "./options/BonusModelMissedReceiveReliefIsDisabledOptions";
import { BonusModelMode } from "./enum/BonusModelMode";
import { BonusModelRepeat } from "./enum/BonusModelRepeat";
import { BonusModelMissedReceiveRelief } from "./enum/BonusModelMissedReceiveRelief";

export default class BonusModel {
    private readonly name: string;
    private readonly mode: BonusModelMode;
    private readonly missedReceiveRelief: BonusModelMissedReceiveRelief;
    private readonly metadata: string|null = null;
    private readonly periodEventId: string|null = null;
    private readonly resetHour: number|null = null;
    private readonly repeat: BonusModelRepeat|null = null;
    private readonly rewards: Reward[]|null = null;
    private readonly missedReceiveReliefConsumeActions: ConsumeAction[]|null = null;

    public constructor(
        name: string,
        mode: BonusModelMode,
        missedReceiveRelief: BonusModelMissedReceiveRelief,
        options: BonusModelOptions|null = null,
    ) {
        this.name = name;
        this.mode = mode;
        this.missedReceiveRelief = missedReceiveRelief;
        this.metadata = options?.metadata ?? null;
        this.periodEventId = options?.periodEventId ?? null;
        this.resetHour = options?.resetHour ?? null;
        this.repeat = options?.repeat ?? null;
        this.rewards = options?.rewards ?? null;
        this.missedReceiveReliefConsumeActions = options?.missedReceiveReliefConsumeActions ?? null;
    }

    public static modeIsSchedule(
        name: string,
        missedReceiveRelief: BonusModelMissedReceiveRelief,
        options: BonusModelModeIsScheduleOptions|null = null,
    ): BonusModel {
        return new BonusModel(
            name,
            BonusModelMode.SCHEDULE,
            missedReceiveRelief,
            {
                metadata: options?.metadata,
                periodEventId: options?.periodEventId,
                rewards: options?.rewards,
                missedReceiveReliefConsumeActions: options?.missedReceiveReliefConsumeActions,
            },
        );
    }

    public static modeIsStreaming(
        name: string,
        missedReceiveRelief: BonusModelMissedReceiveRelief,
        repeat: BonusModelRepeat,
        options: BonusModelModeIsStreamingOptions|null = null,
    ): BonusModel {
        return new BonusModel(
            name,
            BonusModelMode.STREAMING,
            missedReceiveRelief,
            {
                repeat: repeat,
                metadata: options?.metadata,
                periodEventId: options?.periodEventId,
                rewards: options?.rewards,
                missedReceiveReliefConsumeActions: options?.missedReceiveReliefConsumeActions,
            },
        );
    }

    public static missedReceiveReliefIsEnabled(
        name: string,
        mode: BonusModelMode,
        options: BonusModelMissedReceiveReliefIsEnabledOptions|null = null,
    ): BonusModel {
        return new BonusModel(
            name,
            mode,
            BonusModelMissedReceiveRelief.ENABLED,
            {
                metadata: options?.metadata,
                periodEventId: options?.periodEventId,
                rewards: options?.rewards,
                missedReceiveReliefConsumeActions: options?.missedReceiveReliefConsumeActions,
            },
        );
    }

    public static missedReceiveReliefIsDisabled(
        name: string,
        mode: BonusModelMode,
        options: BonusModelMissedReceiveReliefIsDisabledOptions|null = null,
    ): BonusModel {
        return new BonusModel(
            name,
            mode,
            BonusModelMissedReceiveRelief.DISABLED,
            {
                metadata: options?.metadata,
                periodEventId: options?.periodEventId,
                rewards: options?.rewards,
                missedReceiveReliefConsumeActions: options?.missedReceiveReliefConsumeActions,
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
        if (this.mode != null) {
            properties["mode"] = this.mode;
        }
        if (this.periodEventId != null) {
            properties["periodEventId"] = this.periodEventId;
        }
        if (this.resetHour != null) {
            properties["resetHour"] = this.resetHour;
        }
        if (this.repeat != null) {
            properties["repeat"] = this.repeat;
        }
        if (this.rewards != null) {
            properties["rewards"] = this.rewards.map(v => v.properties(
                ));
        }
        if (this.missedReceiveRelief != null) {
            properties["missedReceiveRelief"] = this.missedReceiveRelief;
        }
        if (this.missedReceiveReliefConsumeActions != null) {
            properties["missedReceiveReliefConsumeActions"] = this.missedReceiveReliefConsumeActions.map(v => v.properties(
                ));
        }

        return properties;
    }
}
