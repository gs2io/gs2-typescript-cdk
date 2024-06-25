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
const StoreContentModelRef_1 = tslib_1.__importDefault(require("./StoreContentModelRef"));
const DepositByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DepositByUserId"));
const WithdrawByUserId_1 = tslib_1.__importDefault(require("../stampSheet/WithdrawByUserId"));
const VerifyReceiptByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyReceiptByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    storeContentModel(contentName) {
        return new StoreContentModelRef_1.default(this.namespaceName, contentName);
    }
    deposit(slot, depositTransactions, userId = "#{userId}") {
        return new DepositByUserId_1.default(this.namespaceName, slot, depositTransactions, userId);
    }
    withdraw(slot, withdrawCount, paidOnly = null, userId = "#{userId}") {
        return new WithdrawByUserId_1.default(this.namespaceName, slot, withdrawCount, paidOnly, userId);
    }
    verifyReceipt(contentName, receipt, userId = "#{userId}") {
        return new VerifyReceiptByUserId_1.default(this.namespaceName, contentName, receipt, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "money2",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map