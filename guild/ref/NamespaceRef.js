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
const GuildModelRef_1 = tslib_1.__importDefault(require("./GuildModelRef"));
const IncreaseMaximumCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/IncreaseMaximumCurrentMaximumMemberCountByGuildName"));
const SetMaximumCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/SetMaximumCurrentMaximumMemberCountByGuildName"));
const DecreaseMaximumCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/DecreaseMaximumCurrentMaximumMemberCountByGuildName"));
const VerifyCurrentMaximumMemberCountByGuildName_1 = tslib_1.__importDefault(require("../stampSheet/VerifyCurrentMaximumMemberCountByGuildName"));
const VerifyIncludeMemberByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyIncludeMemberByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    guildModel(guildModelName) {
        return new GuildModelRef_1.default(this.namespaceName, guildModelName);
    }
    increaseMaximumCurrentMaximumMemberCountByGuildName(guildModelName, guildName, value = null) {
        return new IncreaseMaximumCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, guildModelName, guildName, value);
    }
    setMaximumCurrentMaximumMemberCountByGuildName(guildName, guildModelName, value = null) {
        return new SetMaximumCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, guildName, guildModelName, value);
    }
    decreaseMaximumCurrentMaximumMemberCountByGuildName(guildModelName, guildName, value = null) {
        return new DecreaseMaximumCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, guildModelName, guildName, value);
    }
    verifyCurrentMaximumMemberCountByGuildName(guildModelName, guildName, verifyType, value = null, multiplyValueSpecifyingQuantity = null) {
        return new VerifyCurrentMaximumMemberCountByGuildName_1.default(this.namespaceName, guildModelName, guildName, verifyType, value, multiplyValueSpecifyingQuantity);
    }
    verifyIncludeMember(guildModelName, verifyType, guildName = null, userId = "#{userId}") {
        return new VerifyIncludeMemberByUserId_1.default(this.namespaceName, guildModelName, verifyType, guildName, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "guild",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map