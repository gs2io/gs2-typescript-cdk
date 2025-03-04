"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationSetting {
    constructor(options = null) {
        var _a, _b, _c;
        this.gatewayNamespaceId = (_a = options === null || options === void 0 ? void 0 : options.gatewayNamespaceId) !== null && _a !== void 0 ? _a : null;
        this.enableTransferMobileNotification = (_b = options === null || options === void 0 ? void 0 : options.enableTransferMobileNotification) !== null && _b !== void 0 ? _b : false;
        this.sound = (_c = options === null || options === void 0 ? void 0 : options.sound) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
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
exports.default = NotificationSetting;
//# sourceMappingURL=NotificationSetting.js.map