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
const ItemModelRef_1 = tslib_1.__importDefault(require("./ItemModelRef"));
const AddCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddCapacityByUserId"));
const SetCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetCapacityByUserId"));
const AcquireItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireItemSetByUserId"));
const AddReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddReferenceOfByUserId"));
const DeleteReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteReferenceOfByUserId"));
const ConsumeItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeItemSetByUserId"));
const VerifyReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyReferenceOfByUserId"));
class InventoryModelRef {
    constructor(namespaceName, inventoryName) {
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
    }
    itemModel(itemName) {
        return new ItemModelRef_1.default(this.namespaceName, this.inventoryName, itemName);
    }
    addCapacity(addCapacityValue, userId = "#{userId}") {
        return new AddCapacityByUserId_1.default(this.namespaceName, this.inventoryName, addCapacityValue, userId);
    }
    setCapacity(newCapacityValue, userId = "#{userId}") {
        return new SetCapacityByUserId_1.default(this.namespaceName, this.inventoryName, newCapacityValue, userId);
    }
    acquireItemSet(itemName, acquireCount, expiresAt, createNewItemSet, itemSetName = null, userId = "#{userId}") {
        return new AcquireItemSetByUserId_1.default(this.namespaceName, this.inventoryName, itemName, acquireCount, expiresAt, createNewItemSet, itemSetName, userId);
    }
    addReferenceOf(itemName, itemSetName, referenceOf, userId = "#{userId}") {
        return new AddReferenceOfByUserId_1.default(this.namespaceName, this.inventoryName, itemName, itemSetName, referenceOf, userId);
    }
    deleteReferenceOf(itemName, itemSetName, referenceOf, userId = "#{userId}") {
        return new DeleteReferenceOfByUserId_1.default(this.namespaceName, this.inventoryName, itemName, itemSetName, referenceOf, userId);
    }
    consumeItemSet(itemName, consumeCount, itemSetName = null, userId = "#{userId}") {
        return new ConsumeItemSetByUserId_1.default(this.namespaceName, this.inventoryName, itemName, consumeCount, itemSetName, userId);
    }
    verifyReferenceOf(itemName, itemSetName, referenceOf, verifyType, userId = "#{userId}") {
        return new VerifyReferenceOfByUserId_1.default(this.namespaceName, this.inventoryName, itemName, itemSetName, referenceOf, verifyType, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "inventory",
            this.namespaceName,
            "model",
            this.inventoryName,
        ]).str();
    }
}
exports.default = InventoryModelRef;
//# sourceMappingURL=InventoryModelRef.js.map