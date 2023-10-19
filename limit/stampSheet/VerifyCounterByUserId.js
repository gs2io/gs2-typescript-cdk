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
        let properties = {};
        properties["namespaceName"] = namespaceName;
        properties["limitName"] = limitName;
        properties["counterName"] = counterName;
        properties["verifyType"] = verifyType;
        properties["count"] = count;
        properties["userId"] = userId;
        super("Gs2Limit:VerifyCounterByUserId", properties);
    }
}
exports.default = VerifyCounterByUserId;
//# sourceMappingURL=VerifyCounterByUserId.js.map