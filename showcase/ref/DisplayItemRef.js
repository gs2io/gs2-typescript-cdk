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
const SalesItemRef_1 = tslib_1.__importDefault(require("./SalesItemRef"));
const SalesItemGroupRef_1 = tslib_1.__importDefault(require("./SalesItemGroupRef"));
class DisplayItemRef {
    constructor(namespaceName, displayItemId) {
        this.namespaceName = namespaceName;
        this.displayItemId = displayItemId;
    }
    salesItem() {
        return new SalesItemRef_1.default(this.namespaceName, this.displayItemId);
    }
    salesItemGroup() {
        return new SalesItemGroupRef_1.default(this.namespaceName, this.displayItemId);
    }
}
exports.default = DisplayItemRef;
//# sourceMappingURL=DisplayItemRef.js.map