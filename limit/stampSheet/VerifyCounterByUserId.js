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
class VerifyCounterByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, limitName, counterName, verifyType, count = null, userId = "#{userId}") {
        super();
        this.count = null;
        this.namespaceName = namespaceName;
        this.limitName = limitName;
        this.counterName = counterName;
        this.verifyType = verifyType;
        this.count = count !== null && count !== void 0 ? count : null;
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
        if (this.limitName != null) {
            properties["limitName"] = this.limitName;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.count != null) {
            properties["count"] = this.count;
        }
        return properties;
    }
    action() {
        return "Gs2Limit:VerifyCounterByUserId";
    }
}
exports.default = VerifyCounterByUserId;
//# sourceMappingURL=VerifyCounterByUserId.js.map