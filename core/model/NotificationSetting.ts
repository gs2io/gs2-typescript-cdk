/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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

export default class NotificationSetting {

    gatewayNamespaceId: string;
    enableTransferMobileNotification: boolean | null;
    sound: string | null;

    public constructor(
        gatewayNamespaceId: string,
        enableTransferMobileNotification: boolean | null = null,
        sound: string | null = null,
    ) {
        this.gatewayNamespaceId = gatewayNamespaceId;
        this.enableTransferMobileNotification = enableTransferMobileNotification;
        this.sound = sound;
    }

    public properties(): { [name: string]: any } {
        return {
            "GatewayNamespaceId": this.gatewayNamespaceId,
            "EnableTransferMobileNotification": this.enableTransferMobileNotification,
            "Sound": this.sound,
        };
    }
}