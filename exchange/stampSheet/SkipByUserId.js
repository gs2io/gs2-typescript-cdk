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
class SkipByUserId extends model_1.AcquireAction {
    constructor(namespaceName, awaitName = null, skipType = null, minutes = null, rate = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.awaitName = null;
        this.skipType = null;
        this.minutes = null;
        this.rate = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.awaitName = awaitName !== null && awaitName !== void 0 ? awaitName : null;
        this.skipType = skipType !== null && skipType !== void 0 ? skipType : null;
        this.minutes = minutes !== null && minutes !== void 0 ? minutes : null;
        this.rate = rate !== null && rate !== void 0 ? rate : null;
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
        if (this.skipType != null) {
            properties["skipType"] = this.skipType;
        }
        if (this.minutes != null) {
            properties["minutes"] = this.minutes;
        }
        if (this.rate != null) {
            properties["rate"] = this.rate;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2Exchange:SkipByUserId";
    }
}
exports.default = SkipByUserId;
//# sourceMappingURL=SkipByUserId.js.map