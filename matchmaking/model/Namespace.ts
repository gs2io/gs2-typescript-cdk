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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";
import TransactionSetting from "../../core/model/TransactionSetting";
import ScriptSetting from "../../core/model/ScriptSetting";
import NotificationSetting from "../../core/model/NotificationSetting";
import LogSetting from "../../core/model/LogSetting";

import NamespaceRef from "../ref/NamespaceRef";
import CurrentMasterData from "./CurrentMasterData";
import RatingModel from "./RatingModel";
import SeasonModel from "./SeasonModel";
import { NamespaceEnableDisconnectDetection } from "./enums/NamespaceEnableDisconnectDetection";
import { NamespaceCreateGatheringTriggerType } from "./enums/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "./enums/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceEnableCollaborateSeasonRating } from "./enums/NamespaceEnableCollaborateSeasonRating";

import { NamespaceOptions } from "./options/NamespaceOptions";

export default class Namespace extends CdkResource {
    private readonly stack: Stack;
    private readonly name: string;
    private readonly description: string|null = null;
    private readonly transactionSetting: TransactionSetting|null = null;
    private readonly enableRating: boolean|null = null;
    private readonly enableDisconnectDetection: NamespaceEnableDisconnectDetection|null = null;
    private readonly disconnectDetectionTimeoutSeconds: number|null = null;
    private readonly createGatheringTriggerType: NamespaceCreateGatheringTriggerType|null = null;
    private readonly createGatheringTriggerRealtimeNamespaceId: string|null = null;
    private readonly createGatheringTriggerScriptId: string|null = null;
    private readonly completeMatchmakingTriggerType: NamespaceCompleteMatchmakingTriggerType|null = null;
    private readonly completeMatchmakingTriggerRealtimeNamespaceId: string|null = null;
    private readonly completeMatchmakingTriggerScriptId: string|null = null;
    private readonly enableCollaborateSeasonRating: NamespaceEnableCollaborateSeasonRating|null = null;
    private readonly collaborateSeasonRatingNamespaceId: string|null = null;
    private readonly collaborateSeasonRatingTtl: number|null = null;
    private readonly changeRatingScript: ScriptSetting|null = null;
    private readonly joinNotification: NotificationSetting|null = null;
    private readonly leaveNotification: NotificationSetting|null = null;
    private readonly completeNotification: NotificationSetting|null = null;
    private readonly changeRatingNotification: NotificationSetting|null = null;
    private readonly logSetting: LogSetting|null = null;

    public constructor(
        stack: Stack,
        name: string,
        options: NamespaceOptions|null = null,
    ) {
        super(
            "Matchmaking_Namespace_" + name
        );

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.transactionSetting = options?.transactionSetting ?? null;
        this.enableRating = options?.enableRating ?? null;
        this.enableDisconnectDetection = options?.enableDisconnectDetection ?? null;
        this.disconnectDetectionTimeoutSeconds = options?.disconnectDetectionTimeoutSeconds ?? null;
        this.createGatheringTriggerType = options?.createGatheringTriggerType ?? null;
        this.createGatheringTriggerRealtimeNamespaceId = options?.createGatheringTriggerRealtimeNamespaceId ?? null;
        this.createGatheringTriggerScriptId = options?.createGatheringTriggerScriptId ?? null;
        this.completeMatchmakingTriggerType = options?.completeMatchmakingTriggerType ?? null;
        this.completeMatchmakingTriggerRealtimeNamespaceId = options?.completeMatchmakingTriggerRealtimeNamespaceId ?? null;
        this.completeMatchmakingTriggerScriptId = options?.completeMatchmakingTriggerScriptId ?? null;
        this.enableCollaborateSeasonRating = options?.enableCollaborateSeasonRating ?? null;
        this.collaborateSeasonRatingNamespaceId = options?.collaborateSeasonRatingNamespaceId ?? null;
        this.collaborateSeasonRatingTtl = options?.collaborateSeasonRatingTtl ?? null;
        this.changeRatingScript = options?.changeRatingScript ?? null;
        this.joinNotification = options?.joinNotification ?? null;
        this.leaveNotification = options?.leaveNotification ?? null;
        this.completeNotification = options?.completeNotification ?? null;
        this.changeRatingNotification = options?.changeRatingNotification ?? null;
        this.logSetting = options?.logSetting ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "name";
    }

    public resourceType(
    ): string {
        return "GS2::Matchmaking::Namespace";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = this.transactionSetting?.properties(
            );
        }
        if (this.enableRating != null) {
            properties["EnableRating"] = this.enableRating;
        }
        if (this.enableDisconnectDetection != null) {
            properties["EnableDisconnectDetection"] = this.enableDisconnectDetection;
        }
        if (this.disconnectDetectionTimeoutSeconds != null) {
            properties["DisconnectDetectionTimeoutSeconds"] = this.disconnectDetectionTimeoutSeconds;
        }
        if (this.createGatheringTriggerType != null) {
            properties["CreateGatheringTriggerType"] = this.createGatheringTriggerType;
        }
        if (this.createGatheringTriggerRealtimeNamespaceId != null) {
            properties["CreateGatheringTriggerRealtimeNamespaceId"] = this.createGatheringTriggerRealtimeNamespaceId;
        }
        if (this.createGatheringTriggerScriptId != null) {
            properties["CreateGatheringTriggerScriptId"] = this.createGatheringTriggerScriptId;
        }
        if (this.completeMatchmakingTriggerType != null) {
            properties["CompleteMatchmakingTriggerType"] = this.completeMatchmakingTriggerType;
        }
        if (this.completeMatchmakingTriggerRealtimeNamespaceId != null) {
            properties["CompleteMatchmakingTriggerRealtimeNamespaceId"] = this.completeMatchmakingTriggerRealtimeNamespaceId;
        }
        if (this.completeMatchmakingTriggerScriptId != null) {
            properties["CompleteMatchmakingTriggerScriptId"] = this.completeMatchmakingTriggerScriptId;
        }
        if (this.enableCollaborateSeasonRating != null) {
            properties["EnableCollaborateSeasonRating"] = this.enableCollaborateSeasonRating;
        }
        if (this.collaborateSeasonRatingNamespaceId != null) {
            properties["CollaborateSeasonRatingNamespaceId"] = this.collaborateSeasonRatingNamespaceId;
        }
        if (this.collaborateSeasonRatingTtl != null) {
            properties["CollaborateSeasonRatingTtl"] = this.collaborateSeasonRatingTtl;
        }
        if (this.changeRatingScript != null) {
            properties["ChangeRatingScript"] = this.changeRatingScript?.properties(
            );
        }
        if (this.joinNotification != null) {
            properties["JoinNotification"] = this.joinNotification?.properties(
            );
        }
        if (this.leaveNotification != null) {
            properties["LeaveNotification"] = this.leaveNotification?.properties(
            );
        }
        if (this.completeNotification != null) {
            properties["CompleteNotification"] = this.completeNotification?.properties(
            );
        }
        if (this.changeRatingNotification != null) {
            properties["ChangeRatingNotification"] = this.changeRatingNotification?.properties(
            );
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = this.logSetting?.properties(
            );
        }

        return properties;
    }

    public ref(
    ): NamespaceRef {
        return new NamespaceRef(
            this.name!,
        );
    }

    public getAttrNamespaceId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.NamespaceId",
            null,
        );
    }

    public masterData(
        ratingModels: RatingModel[],
        seasonModels: SeasonModel[],
    ): Namespace {
        new CurrentMasterData(
            this.stack,
            this.name,
            ratingModels,
            seasonModels,
        ).addDependsOn(
            this,
        );
        return this;
    }
}
