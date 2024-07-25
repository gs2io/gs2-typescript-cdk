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

export interface NamespaceOptions {
    description?: string|null;
    followScript?: ScriptSetting|null;
    unfollowScript?: ScriptSetting|null;
    sendRequestScript?: ScriptSetting|null;
    cancelRequestScript?: ScriptSetting|null;
    acceptRequestScript?: ScriptSetting|null;
    rejectRequestScript?: ScriptSetting|null;
    deleteFriendScript?: ScriptSetting|null;
    updateProfileScript?: ScriptSetting|null;
    followNotification?: NotificationSetting|null;
    receiveRequestNotification?: NotificationSetting|null;
    cancelRequestNotification?: NotificationSetting|null;
    acceptRequestNotification?: NotificationSetting|null;
    rejectRequestNotification?: NotificationSetting|null;
    deleteFriendNotification?: NotificationSetting|null;
    logSetting?: LogSetting|null;
}

