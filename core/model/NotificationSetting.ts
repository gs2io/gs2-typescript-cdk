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

import { NotificationSettingOptions } from "./NotificationSettingOptions";

export default class NotificationSetting {

    gatewayNamespaceId: string | null;
    enableTransferMobileNotification: boolean | null;
    sound: string | null;

    public constructor(
        options: NotificationSettingOptions|null = null,
    ) {
        this.gatewayNamespaceId = options?.gatewayNamespaceId ?? null;
        this.enableTransferMobileNotification = options?.enableTransferMobileNotification ?? false;
        this.sound = options?.sound ?? null;
    }

    public properties(): { [name: string]: any } {
        let properties: {[name: string]: any} = {};

        if (this.gatewayNamespaceId != null) {
            properties["GatewayNamespaceId"] = this.gatewayNamespaceId;
        }
        if (this.enableTransferMobileNotification != null) {
            properties["EnableTransferMobileNotification"] = this.enableTransferMobileNotification;
        }
        if (this.sound != null) {
            properties["Sound"] = this.sound;
        }

        return properties;
    }
}