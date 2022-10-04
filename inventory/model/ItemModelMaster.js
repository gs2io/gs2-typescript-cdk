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
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
const ItemModelMasterRef_1 = tslib_1.__importDefault(require("../ref/ItemModelMasterRef"));
class ItemModelMaster extends core_1.default.CdkResource {
    constructor(stack, namespaceName, inventoryName, name, stackingLimit, allowMultipleStacks, sortValue, options) {
        var _a, _b;
        super("Inventory_ItemModelMaster_" + name);
        this.description = null;
        this.metadata = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
        this.stackingLimit = stackingLimit;
        this.allowMultipleStacks = allowMultipleStacks;
        this.sortValue = sortValue;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Inventory::ItemModelMaster";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.inventoryName != null) {
            properties["InventoryName"] = this.inventoryName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.stackingLimit != null) {
            properties["StackingLimit"] = this.stackingLimit;
        }
        if (this.allowMultipleStacks != null) {
            properties["AllowMultipleStacks"] = this.allowMultipleStacks;
        }
        if (this.sortValue != null) {
            properties["SortValue"] = this.sortValue;
        }
        return properties;
    }
    ref(namespaceName, inventoryName) {
        return new ItemModelMasterRef_1.default(namespaceName, inventoryName, this.name);
    }
    getAttrItemModelId() {
        return new func_1.GetAttr(null, null, "Item.ItemModelId");
    }
}
exports.default = ItemModelMaster;
//# sourceMappingURL=ItemModelMaster.js.map