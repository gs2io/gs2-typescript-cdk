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
class VerifyCodeByUserId extends model_1.VerifyAction {
    constructor(namespaceName, code, verifyType, campaignModelName = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.campaignModelName = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.code = code;
        this.verifyType = verifyType;
        this.campaignModelName = campaignModelName !== null && campaignModelName !== void 0 ? campaignModelName : null;
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
        if (this.code != null) {
            properties["code"] = this.code;
        }
        if (this.campaignModelName != null) {
            properties["campaignModelName"] = this.campaignModelName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2SerialKey:VerifyCodeByUserId";
    }
}
exports.default = VerifyCodeByUserId;
//# sourceMappingURL=VerifyCodeByUserId.js.map