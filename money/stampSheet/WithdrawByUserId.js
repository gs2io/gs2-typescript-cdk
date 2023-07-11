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
class WithdrawByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, slot, count, paidOnly = null, userId = "#{userId}") {
        let properties = {};
        properties["namespaceName"] = namespaceName;
        properties["slot"] = slot;
        properties["count"] = count;
        properties["paidOnly"] = paidOnly;
        properties["userId"] = userId;
        super("Gs2Money:WithdrawByUserId", properties);
    }
}
exports.default = WithdrawByUserId;
//# sourceMappingURL=WithdrawByUserId.js.map