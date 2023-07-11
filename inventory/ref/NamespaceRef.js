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
 *
 * deny overwrite
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const func_1 = require("../../core/func");
const InventoryModelRef_1 = tslib_1.__importDefault(require("./InventoryModelRef"));
const SimpleInventoryModelRef_1 = tslib_1.__importDefault(require("./SimpleInventoryModelRef"));
const AddCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddCapacityByUserId"));
const SetCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetCapacityByUserId"));
const AcquireItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireItemSetByUserId"));
const AddReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddReferenceOfByUserId"));
const DeleteReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteReferenceOfByUserId"));
const AcquireSimpleItemsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireSimpleItemsByUserId"));
const ConsumeItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeItemSetByUserId"));
const VerifyReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyReferenceOfByUserId"));
const ConsumeSimpleItemsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeSimpleItemsByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    inventoryModel(inventoryName) {
        return new InventoryModelRef_1.default(this.namespaceName, inventoryName);
    }
    simpleInventoryModel(inventoryName) {
        return new SimpleInventoryModelRef_1.default(this.namespaceName, inventoryName);
    }
    addCapacity(inventoryName, addCapacityValue, userId = "#{userId}") {
        return new AddCapacityByUserId_1.default(this.namespaceName, inventoryName, addCapacityValue, userId);
    }
    setCapacity(inventoryName, newCapacityValue, userId = "#{userId}") {
        return new SetCapacityByUserId_1.default(this.namespaceName, inventoryName, newCapacityValue, userId);
    }
    acquireItemSet(inventoryName, itemName, acquireCount, expiresAt, createNewItemSet, itemSetName = null, userId = "#{userId}") {
        return new AcquireItemSetByUserId_1.default(this.namespaceName, inventoryName, itemName, acquireCount, expiresAt, createNewItemSet, itemSetName, userId);
    }
    addReferenceOf(inventoryName, itemName, itemSetName, referenceOf, userId = "#{userId}") {
        return new AddReferenceOfByUserId_1.default(this.namespaceName, inventoryName, itemName, itemSetName, referenceOf, userId);
    }
    deleteReferenceOf(inventoryName, itemName, itemSetName, referenceOf, userId = "#{userId}") {
        return new DeleteReferenceOfByUserId_1.default(this.namespaceName, inventoryName, itemName, itemSetName, referenceOf, userId);
    }
    acquireSimpleItems(inventoryName, acquireCounts, userId = "#{userId}") {
        return new AcquireSimpleItemsByUserId_1.default(this.namespaceName, inventoryName, acquireCounts, userId);
    }
    consumeItemSet(inventoryName, itemName, consumeCount, itemSetName = null, userId = "#{userId}") {
        return new ConsumeItemSetByUserId_1.default(this.namespaceName, inventoryName, itemName, consumeCount, itemSetName, userId);
    }
    verifyReferenceOf(inventoryName, itemName, itemSetName, referenceOf, verifyType, userId = "#{userId}") {
        return new VerifyReferenceOfByUserId_1.default(this.namespaceName, inventoryName, itemName, itemSetName, referenceOf, verifyType, userId);
    }
    consumeSimpleItems(inventoryName, consumeCounts, userId = "#{userId}") {
        return new ConsumeSimpleItemsByUserId_1.default(this.namespaceName, inventoryName, consumeCounts, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "inventory",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map