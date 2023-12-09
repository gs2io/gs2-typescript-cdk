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
class CountUpByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, limitName, counterName, countUpValue = null, maxValue = null, userId = "#{userId}") {
        super();
        this.countUpValue = null;
        this.maxValue = null;
        this.namespaceName = namespaceName;
        this.limitName = limitName;
        this.counterName = counterName;
        this.countUpValue = countUpValue !== null && countUpValue !== void 0 ? countUpValue : null;
        this.maxValue = maxValue !== null && maxValue !== void 0 ? maxValue : null;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.limitName != null) {
            properties["limitName"] = this.limitName;
        }
        if (this.counterName != null) {
            properties["counterName"] = this.counterName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.countUpValue != null) {
            properties["countUpValue"] = this.countUpValue;
        }
        if (this.maxValue != null) {
            properties["maxValue"] = this.maxValue;
        }
        return properties;
    }
    action() {
        return "Gs2Limit:CountUpByUserId";
    }
}
exports.default = CountUpByUserId;
//# sourceMappingURL=CountUpByUserId.js.map