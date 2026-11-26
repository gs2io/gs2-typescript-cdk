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
class VerifyFormByUserId extends model_1.VerifyAction {
    constructor(namespaceName, moldModelName, index, propertyIdRegex, verifyType, count, slotName = null, countType = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.slotName = null;
        this.countType = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.moldModelName = moldModelName;
        this.index = index;
        this.propertyIdRegex = propertyIdRegex;
        this.verifyType = verifyType;
        this.count = count;
        this.slotName = slotName !== null && slotName !== void 0 ? slotName : null;
        this.countType = countType !== null && countType !== void 0 ? countType : null;
        this.timeOffsetToken = timeOffsetToken !== null && timeOffsetToken !== void 0 ? timeOffsetToken : null;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.moldModelName != null) {
            properties["moldModelName"] = this.moldModelName;
        }
        if (this.index != null) {
            properties["index"] = this.index;
        }
        if (this.slotName != null) {
            properties["slotName"] = this.slotName;
        }
        if (this.propertyIdRegex != null) {
            properties["propertyIdRegex"] = this.propertyIdRegex;
        }
        if (this.countType != null) {
            properties["countType"] = this.countType;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2Formation:VerifyFormByUserId";
    }
}
exports.default = VerifyFormByUserId;
//# sourceMappingURL=VerifyFormByUserId.js.map