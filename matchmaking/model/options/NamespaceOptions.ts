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
import ScriptSetting from "../../../core/model/ScriptSetting";
import NotificationSetting from "../../../core/model/NotificationSetting";
import LogSetting from "../../../core/model/LogSetting";
import { NamespaceEnableDisconnectDetection } from "../enum/NamespaceEnableDisconnectDetection";
import { NamespaceCreateGatheringTriggerType } from "../enum/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "../enum/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceEnableCollaborateSeasonRating } from "../enum/NamespaceEnableCollaborateSeasonRating";

export interface NamespaceOptions {
    description?: string|null;
    enableRating?: boolean|null;
    enableDisconnectDetection?: NamespaceEnableDisconnectDetection|null;
    disconnectDetectionTimeoutSeconds?: number|null;
    createGatheringTriggerRealtimeNamespaceId?: string|null;
    createGatheringTriggerScriptId?: string|null;
    completeMatchmakingTriggerRealtimeNamespaceId?: string|null;
    completeMatchmakingTriggerScriptId?: string|null;
    enableCollaborateSeasonRating?: NamespaceEnableCollaborateSeasonRating|null;
    collaborateSeasonRatingNamespaceId?: string|null;
    collaborateSeasonRatingTtl?: number|null;
    changeRatingScript?: ScriptSetting|null;
    joinNotification?: NotificationSetting|null;
    leaveNotification?: NotificationSetting|null;
    completeNotification?: NotificationSetting|null;
    changeRatingNotification?: NotificationSetting|null;
    logSetting?: LogSetting|null;
}

