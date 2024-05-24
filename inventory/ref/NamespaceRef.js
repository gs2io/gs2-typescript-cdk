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
const InventoryModelRef_1 = tslib_1.__importDefault(require("./InventoryModelRef"));
const SimpleInventoryModelRef_1 = tslib_1.__importDefault(require("./SimpleInventoryModelRef"));
const BigInventoryModelRef_1 = tslib_1.__importDefault(require("./BigInventoryModelRef"));
const AddCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddCapacityByUserId"));
const SetCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetCapacityByUserId"));
const AcquireItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireItemSetByUserId"));
const AcquireItemSetWithGradeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireItemSetWithGradeByUserId"));
const AddReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddReferenceOfByUserId"));
const DeleteReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteReferenceOfByUserId"));
const AcquireSimpleItemsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireSimpleItemsByUserId"));
const SetSimpleItemsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetSimpleItemsByUserId"));
const AcquireBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AcquireBigItemByUserId"));
const SetBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetBigItemByUserId"));
const VerifyInventoryCurrentMaxCapacityByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyInventoryCurrentMaxCapacityByUserId"));
const ConsumeItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeItemSetByUserId"));
const VerifyItemSetByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyItemSetByUserId"));
const VerifyReferenceOfByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyReferenceOfByUserId"));
const ConsumeSimpleItemsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeSimpleItemsByUserId"));
const VerifySimpleItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifySimpleItemByUserId"));
const ConsumeBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeBigItemByUserId"));
const VerifyBigItemByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyBigItemByUserId"));
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
    bigInventoryModel(inventoryName) {
        return new BigInventoryModelRef_1.default(this.namespaceName, inventoryName);
    }
    addCapacity(inventoryName, addCapacityValue, userId = "#{userId}") {
        return new AddCapacityByUserId_1.default(this.namespaceName, inventoryName, addCapacityValue, userId);
    }
    setCapacity(inventoryName, newCapacityValue, userId = "#{userId}") {
        return new SetCapacityByUserId_1.default(this.namespaceName, inventoryName, newCapacityValue, userId);
    }
    acquireItemSet(inventoryName, itemName, acquireCount, expiresAt = null, createNewItemSet = null, itemSetName = null, userId = "#{userId}") {
        return new AcquireItemSetByUserId_1.default(this.namespaceName, inventoryName, itemName, acquireCount, expiresAt, createNewItemSet, itemSetName, userId);
    }
    acquireItemSetWithGrade(inventoryName, itemName, gradeModelId, gradeValue, userId = "#{userId}") {
        return new AcquireItemSetWithGradeByUserId_1.default(this.namespaceName, inventoryName, itemName, gradeModelId, gradeValue, userId);
    }
    addReferenceOf(inventoryName, itemName, referenceOf, itemSetName = null, userId = "#{userId}") {
        return new AddReferenceOfByUserId_1.default(this.namespaceName, inventoryName, itemName, referenceOf, itemSetName, userId);
    }
    deleteReferenceOf(inventoryName, itemName, referenceOf, itemSetName = null, userId = "#{userId}") {
        return new DeleteReferenceOfByUserId_1.default(this.namespaceName, inventoryName, itemName, referenceOf, itemSetName, userId);
    }
    acquireSimpleItems(inventoryName, acquireCounts, userId = "#{userId}") {
        return new AcquireSimpleItemsByUserId_1.default(this.namespaceName, inventoryName, acquireCounts, userId);
    }
    setSimpleItems(inventoryName, counts, userId = "#{userId}") {
        return new SetSimpleItemsByUserId_1.default(this.namespaceName, inventoryName, counts, userId);
    }
    acquireBigItem(inventoryName, itemName, acquireCount, userId = "#{userId}") {
        return new AcquireBigItemByUserId_1.default(this.namespaceName, inventoryName, itemName, acquireCount, userId);
    }
    setBigItem(inventoryName, itemName, count, userId = "#{userId}") {
        return new SetBigItemByUserId_1.default(this.namespaceName, inventoryName, itemName, count, userId);
    }
    verifyInventoryCurrentMaxCapacity(inventoryName, verifyType, currentInventoryMaxCapacity, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyInventoryCurrentMaxCapacityByUserId_1.default(this.namespaceName, inventoryName, verifyType, currentInventoryMaxCapacity, multiplyValueSpecifyingQuantity, userId);
    }
    consumeItemSet(inventoryName, itemName, consumeCount, itemSetName = null, userId = "#{userId}") {
        return new ConsumeItemSetByUserId_1.default(this.namespaceName, inventoryName, itemName, consumeCount, itemSetName, userId);
    }
    verifyItemSet(inventoryName, itemName, verifyType, count, itemSetName = null, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyItemSetByUserId_1.default(this.namespaceName, inventoryName, itemName, verifyType, count, itemSetName, multiplyValueSpecifyingQuantity, userId);
    }
    verifyReferenceOf(inventoryName, itemName, referenceOf, verifyType, itemSetName = null, userId = "#{userId}") {
        return new VerifyReferenceOfByUserId_1.default(this.namespaceName, inventoryName, itemName, referenceOf, verifyType, itemSetName, userId);
    }
    consumeSimpleItems(inventoryName, consumeCounts, userId = "#{userId}") {
        return new ConsumeSimpleItemsByUserId_1.default(this.namespaceName, inventoryName, consumeCounts, userId);
    }
    verifySimpleItem(inventoryName, itemName, verifyType, count, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifySimpleItemByUserId_1.default(this.namespaceName, inventoryName, itemName, verifyType, count, multiplyValueSpecifyingQuantity, userId);
    }
    consumeBigItem(inventoryName, itemName, consumeCount, userId = "#{userId}") {
        return new ConsumeBigItemByUserId_1.default(this.namespaceName, inventoryName, itemName, consumeCount, userId);
    }
    verifyBigItem(inventoryName, itemName, verifyType, count, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyBigItemByUserId_1.default(this.namespaceName, inventoryName, itemName, verifyType, count, multiplyValueSpecifyingQuantity, userId);
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