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
class MultiplyAcquireActionsByUserId extends model_1.AcquireAction {
    constructor(namespaceName, experienceName, propertyId, rateName, acquireActions = null, userId = "#{userId}") {
        let properties = {};
        properties["namespaceName"] = namespaceName;
        properties["experienceName"] = experienceName;
        properties["propertyId"] = propertyId;
        properties["rateName"] = rateName;
        if (acquireActions != null) {
            properties["acquireActions"] = acquireActions.map(v => v.properties());
        }
        properties["userId"] = userId;
        super("Gs2Experience:MultiplyAcquireActionsByUserId", properties);
    }
}
exports.default = MultiplyAcquireActionsByUserId;
//# sourceMappingURL=MultiplyAcquireActionsByUserId.js.map