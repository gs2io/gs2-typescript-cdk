"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../core/model");
class SetRecoverValueByUserId extends model_1.AcquireAction {
    constructor(namespaceName, staminaName, recoverValue, userId = "#{userId}") {
        super();
        this.namespaceName = namespaceName;
        this.staminaName = staminaName;
        this.recoverValue = recoverValue;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.staminaName != null) {
            properties["staminaName"] = this.staminaName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.recoverValue != null) {
            properties["recoverValue"] = this.recoverValue;
        }
        return properties;
    }
    action() {
        return "Gs2Stamina:SetRecoverValueByUserId";
    }
}
exports.default = SetRecoverValueByUserId;
//# sourceMappingURL=SetRecoverValueByUserId.js.map