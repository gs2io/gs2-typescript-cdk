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
class VerifyCurrentMaximumMemberCountByGuildName extends model_1.ConsumeAction {
    constructor(namespaceName, guildModelName, guildName, verifyType, value = null, multiplyValueSpecifyingQuantity = null) {
        super();
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.namespaceName = namespaceName;
        this.guildModelName = guildModelName;
        this.guildName = guildName;
        this.verifyType = verifyType;
        this.value = value !== null && value !== void 0 ? value : null;
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity !== null && multiplyValueSpecifyingQuantity !== void 0 ? multiplyValueSpecifyingQuantity : null;
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
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.value != null) {
            properties["value"] = this.value;
        }
        if (this.multiplyValueSpecifyingQuantity != null) {
            properties["multiplyValueSpecifyingQuantity"] = this.multiplyValueSpecifyingQuantity;
        }
        return properties;
    }
    action() {
        return "Gs2Guild:VerifyCurrentMaximumMemberCountByGuildName";
    }
}
exports.default = VerifyCurrentMaximumMemberCountByGuildName;
//# sourceMappingURL=VerifyCurrentMaximumMemberCountByGuildName.js.map