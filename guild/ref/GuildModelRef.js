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
const tslib_1 = require("tslib");
const func_1 = require("../../core/func");
const RoleModelRef_1 = tslib_1.__importDefault(require("./RoleModelRef"));
const IncreaseMaximumCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName"));
const SetMaximumCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName"));
const DecreaseMaximumCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName"));
class GuildModelRef {
    constructor(namespaceName, guildModelName) {
        this.namespaceName = namespaceName;
        this.guildModelName = guildModelName;
    }
    roleModel() {
        return new RoleModelRef_1.default(this.namespaceName, this.guildModelName);
    }
    increaseMaximumCurrentMaximumMemberCountByGuildName(guildName, value = null) {
        return new IncreaseMaximumCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, this.guildModelName, guildName, value);
    }
    setMaximumCurrentMaximumMemberCountByGuildName(guildName, value = null) {
        return new SetMaximumCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, guildName, this.guildModelName, value);
    }
    decreaseMaximumCurrentMaximumMemberCountByGuildName(guildName, value = null) {
        return new DecreaseMaximumCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, this.guildModelName, guildName, value);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "guild",
            this.namespaceName,
            "model",
            this.guildModelName,
        ]).str();
    }
}
exports.default = GuildModelRef;
//# sourceMappingURL=GuildModelRef.js.map