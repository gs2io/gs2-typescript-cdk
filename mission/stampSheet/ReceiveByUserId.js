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
class ReceiveByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, missionGroupName, missionTaskName, userId = "#{userId}") {
        super();
        this.namespaceName = namespaceName;
        this.missionGroupName = missionGroupName;
        this.missionTaskName = missionTaskName;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.missionGroupName != null) {
            properties["missionGroupName"] = this.missionGroupName;
        }
        if (this.missionTaskName != null) {
            properties["missionTaskName"] = this.missionTaskName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        return properties;
    }
    action() {
        return "Gs2Mission:ReceiveByUserId";
    }
}
exports.default = ReceiveByUserId;
//# sourceMappingURL=ReceiveByUserId.js.map