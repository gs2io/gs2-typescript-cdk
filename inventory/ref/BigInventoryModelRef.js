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
const tslib_1 = require("tslib");
const func_1 = require("../../core/func");
const BigItemModelRef_1 = tslib_1.__importDefault(require("./BigItemModelRef"));
const AcquireBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireBigItemByUserId"));
const SetBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetBigItemByUserId"));
const ConsumeBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeBigItemByUserId"));
const VerifyBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyBigItemByUserId"));
class BigInventoryModelRef {
    constructor(namespaceName, inventoryName) {
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
    }
    bigItemModel(itemName) {
        return new BigItemModelRef_1.default(this.namespaceName, this.inventoryName, itemName);
    }
    acquireBigItem(itemName, acquireCount, userId = "#{userId}") {
        return new AcquireBigItemByUserId_1.default(this.namespaceName, this.inventoryName, itemName, acquireCount, userId);
    }
    setBigItem(itemName, count, userId = "#{userId}") {
        return new SetBigItemByUserId_1.default(this.namespaceName, this.inventoryName, itemName, count, userId);
    }
    consumeBigItem(itemName, consumeCount, userId = "#{userId}") {
        return new ConsumeBigItemByUserId_1.default(this.namespaceName, this.inventoryName, itemName, consumeCount, userId);
    }
    verifyBigItem(itemName, verifyType, count, userId = "#{userId}") {
        return new VerifyBigItemByUserId_1.default(this.namespaceName, this.inventoryName, itemName, verifyType, count, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "inventory",
            this.namespaceName,
            "big",
            "model",
            this.inventoryName,
        ]).str();
    }
}
exports.default = BigInventoryModelRef;
//# sourceMappingURL=BigInventoryModelRef.js.map