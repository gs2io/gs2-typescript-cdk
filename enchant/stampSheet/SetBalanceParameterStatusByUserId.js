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
class SetBalanceParameterStatusByUserId extends model_1.AcquireAction {
    constructor(namespaceName, parameterName, propertyId, parameterValues, userId = "#{userId}") {
        let properties = {};
        properties["namespaceName"] = namespaceName;
        properties["parameterName"] = parameterName;
        properties["propertyId"] = propertyId;
        properties["parameterValues"] = parameterValues;
        properties["userId"] = userId;
        super("Gs2Enchant:SetBalanceParameterStatusByUserId", properties);
    }
}
exports.default = SetBalanceParameterStatusByUserId;
//# sourceMappingURL=SetBalanceParameterStatusByUserId.js.map