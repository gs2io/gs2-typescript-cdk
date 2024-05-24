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
import { MissionTaskModelOptions } from "./options/MissionTaskModelOptions";
import { MissionTaskModelVerifyCompleteTypeIsCounterOptions } from "./options/MissionTaskModelVerifyCompleteTypeIsCounterOptions";
import { MissionTaskModelVerifyCompleteTypeIsConsumeActionsOptions } from "./options/MissionTaskModelVerifyCompleteTypeIsConsumeActionsOptions";
import { MissionTaskModelVerifyCompleteType } from "./enum/MissionTaskModelVerifyCompleteType";
import { MissionTaskModelTargetResetType } from "./enum/MissionTaskModelTargetResetType";

export default class MissionTaskModel {
    private readonly name: string;
    private readonly verifyCompleteType: MissionTaskModelVerifyCompleteType;
    private readonly counterName: string;
    private readonly targetValue: number;
    private readonly metadata: string|null = null;
    private readonly targetCounter: TargetCounterModel|null = null;
    private readonly verifyCompleteConsumeActions: ConsumeAction[]|null = null;
    private readonly completeAcquireActions: AcquireAction[]|null = null;
    private readonly challengePeriodEventId: string|null = null;
    private readonly premiseMissionTaskName: string|null = null;
    private readonly targetResetType: MissionTaskModelTargetResetType|null = null;

    public constructor(
        name: string,
        verifyCompleteType: MissionTaskModelVerifyCompleteType,
        counterName: string,
        targetValue: number,
        options: MissionTaskModelOptions|null = null,
    ) {
        this.name = name;
        this.verifyCompleteType = verifyCompleteType;
        this.counterName = counterName;
        this.targetValue = targetValue;
        this.metadata = options?.metadata ?? null;
        this.targetCounter = options?.targetCounter ?? null;
        this.verifyCompleteConsumeActions = options?.verifyCompleteConsumeActions ?? null;
        this.completeAcquireActions = options?.completeAcquireActions ?? null;
        this.challengePeriodEventId = options?.challengePeriodEventId ?? null;
        this.premiseMissionTaskName = options?.premiseMissionTaskName ?? null;
        this.targetResetType = options?.targetResetType ?? null;
    }

    public static verifyCompleteTypeIsCounter(
        name: string,
        counterName: string,
        targetValue: number,
        targetCounter: TargetCounterModel,
        options: MissionTaskModelVerifyCompleteTypeIsCounterOptions|null = null,
    ): MissionTaskModel {
        return new MissionTaskModel(
            name,
            MissionTaskModelVerifyCompleteType.COUNTER,
            counterName,
            targetValue,
            {
                targetCounter: targetCounter,
                metadata: options?.metadata,
                verifyCompleteConsumeActions: options?.verifyCompleteConsumeActions,
                completeAcquireActions: options?.completeAcquireActions,
                challengePeriodEventId: options?.challengePeriodEventId,
                premiseMissionTaskName: options?.premiseMissionTaskName,
                targetResetType: options?.targetResetType,
            },
        );
    }

    public static verifyCompleteTypeIsConsumeActions(
        name: string,
        counterName: string,
        targetValue: number,
        options: MissionTaskModelVerifyCompleteTypeIsConsumeActionsOptions|null = null,
    ): MissionTaskModel {
        return new MissionTaskModel(
            name,
            MissionTaskModelVerifyCompleteType.CONSUME_ACTIONS,
            counterName,
            targetValue,
            {
                metadata: options?.metadata,
                verifyCompleteConsumeActions: options?.verifyCompleteConsumeActions,
                completeAcquireActions: options?.completeAcquireActions,
                challengePeriodEventId: options?.challengePeriodEventId,
                premiseMissionTaskName: options?.premiseMissionTaskName,
                targetResetType: options?.targetResetType,
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
        if (this.verifyCompleteType != null) {
            properties["verifyCompleteType"] = this.verifyCompleteType;
        }
        if (this.targetCounter != null) {
            properties["targetCounter"] = this.targetCounter?.properties(
            );
        }
        if (this.verifyCompleteConsumeActions != null) {
            properties["verifyCompleteConsumeActions"] = this.verifyCompleteConsumeActions.map(v => v.properties(
                ));
        }
        if (this.completeAcquireActions != null) {
            properties["completeAcquireActions"] = this.completeAcquireActions.map(v => v.properties(
                ));
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        if (this.premiseMissionTaskName != null) {
            properties["premiseMissionTaskName"] = this.premiseMissionTaskName;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.targetResetType != null) {
            properties["targetResetType"] = this.targetResetType;
        }
        if (this.targetValue != null) {
            properties["targetValue"] = this.targetValue;
        }

        return properties;
    }
}
