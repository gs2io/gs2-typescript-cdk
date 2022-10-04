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
const func_1 = require("../../core/func");
const CurrentShowcaseMasterRef_1 = tslib_1.__importDefault(require("./CurrentShowcaseMasterRef"));
const DisplayItemRef_1 = tslib_1.__importDefault(require("./DisplayItemRef"));
const SalesItemMasterRef_1 = tslib_1.__importDefault(require("./SalesItemMasterRef"));
const SalesItemGroupMasterRef_1 = tslib_1.__importDefault(require("./SalesItemGroupMasterRef"));
const ShowcaseMasterRef_1 = tslib_1.__importDefault(require("./ShowcaseMasterRef"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    currentShowcaseMaster() {
        return new CurrentShowcaseMasterRef_1.default(this.namespaceName);
    }
    displayItem() {
        return new DisplayItemRef_1.default(this.namespaceName);
    }
    salesItemMaster(salesItemName) {
        return new SalesItemMasterRef_1.default(this.namespaceName, salesItemName);
    }
    salesItemGroupMaster(salesItemGroupName) {
        return new SalesItemGroupMasterRef_1.default(this.namespaceName, salesItemGroupName);
    }
    showcaseMaster(showcaseName) {
        return new ShowcaseMasterRef_1.default(this.namespaceName, showcaseName);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "showcase",
            this.namespaceName
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map