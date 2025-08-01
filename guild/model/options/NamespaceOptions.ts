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
import NotificationSetting from "../../../core/model/NotificationSetting";
import ScriptSetting from "../../../core/model/ScriptSetting";
import LogSetting from "../../../core/model/LogSetting";

export interface NamespaceOptions {
    description?: string|null;
    changeNotification?: NotificationSetting|null;
    joinNotification?: NotificationSetting|null;
    leaveNotification?: NotificationSetting|null;
    changeMemberNotification?: NotificationSetting|null;
    receiveRequestNotification?: NotificationSetting|null;
    removeRequestNotification?: NotificationSetting|null;
    createGuildScript?: ScriptSetting|null;
    updateGuildScript?: ScriptSetting|null;
    joinGuildScript?: ScriptSetting|null;
    receiveJoinRequestScript?: ScriptSetting|null;
    leaveGuildScript?: ScriptSetting|null;
    changeRoleScript?: ScriptSetting|null;
    deleteGuildScript?: ScriptSetting|null;
    logSetting?: LogSetting|null;
}

