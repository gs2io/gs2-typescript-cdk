"use strict";
/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
class AcquireItemSetByUserId extends model_1.AcquireAction {
    constructor(namespaceName, inventoryName, itemName, acquireCount, expiresAt, createNewItemSet, itemSetName = null, userId = '#{userId}') {
        let properties = {};
        if (namespaceName != null) {
            properties["namespaceName"] = namespaceName;
        }
        if (inventoryName != null) {
            properties["inventoryName"] = inventoryName;
        }
        if (itemName != null) {
            properties["itemName"] = itemName;
        }
        if (userId != null) {
            properties["userId"] = userId;
        }
        if (acquireCount != null) {
            properties["acquireCount"] = acquireCount;
        }
        if (expiresAt != null) {
            properties["expiresAt"] = expiresAt;
        }
        if (createNewItemSet != null) {
            properties["createNewItemSet"] = createNewItemSet;
        }
        if (itemSetName != null) {
            properties["itemSetName"] = itemSetName;
        }
        super("Gs2Inventory:AcquireItemSetByUserId", properties);
    }
}
exports.default = AcquireItemSetByUserId;
//# sourceMappingURL=AcquireItemSetByUserId.js.map