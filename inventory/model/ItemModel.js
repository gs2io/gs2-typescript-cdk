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
const ItemModelRef_1 = tslib_1.__importDefault(require("../ref/ItemModelRef"));
class ItemModel {
    constructor(name, stackingLimit, allowMultipleStacks, sortValue, options) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.stackingLimit = stackingLimit;
        this.allowMultipleStacks = allowMultipleStacks;
        this.sortValue = sortValue;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
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
        return new ItemModelRef_1.default(namespaceName, inventoryName, this.name);
    }
}
exports.default = ItemModel;
//# sourceMappingURL=ItemModel.js.map