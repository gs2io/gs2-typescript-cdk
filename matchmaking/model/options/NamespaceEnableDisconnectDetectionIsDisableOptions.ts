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
import { TransactionSetting } from "../../../core/model";
import { ScriptSetting } from "../../../core/model";
import { NotificationSetting } from "../../../core/model";
import { LogSetting } from "../../../core/model";
import { NamespaceEnableDisconnectDetection } from "../enums/NamespaceEnableDisconnectDetection";
import { NamespaceCreateGatheringTriggerType } from "../enums/NamespaceCreateGatheringTriggerType";
import { NamespaceCompleteMatchmakingTriggerType } from "../enums/NamespaceCompleteMatchmakingTriggerType";
import { NamespaceEnableCollaborateSeasonRating } from "../enums/NamespaceEnableCollaborateSeasonRating";

export interface NamespaceEnableDisconnectDetectionIsDisableOptions {
    description?: string|null;
    transactionSetting?: TransactionSetting|null;
    changeRatingScript?: ScriptSetting|null;
    joinNotification?: NotificationSetting|null;
    leaveNotification?: NotificationSetting|null;
    completeNotification?: NotificationSetting|null;
    changeRatingNotification?: NotificationSetting|null;
    logSetting?: LogSetting|null;
    revision?: number|null;
}
