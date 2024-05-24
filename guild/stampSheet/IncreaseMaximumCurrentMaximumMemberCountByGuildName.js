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
class IncreaseMaximumCurrentMaximumMemberCountByGuildName extends model_1.AcquireAction {
    constructor(namespaceName, guildModelName, guildName, value = null) {
        super();
        this.value = null;
        this.namespaceName = namespaceName;
        this.guildModelName = guildModelName;
        this.guildName = guildName;
        this.value = value !== null && value !== void 0 ? value : null;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.guildModelName != null) {
            properties["guildModelName"] = this.guildModelName;
        }
        if (this.guildName != null) {
            properties["guildName"] = this.guildName;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        return properties;
    }
    action() {
        return "Gs2Guild:IncreaseMaximumCurrentMaximumMemberCountByGuildName";
    }
}
exports.default = IncreaseMaximumCurrentMaximumMemberCountByGuildName;
//# sourceMappingURL=IncreaseMaximumCurrentMaximumMemberCountByGuildName.js.map