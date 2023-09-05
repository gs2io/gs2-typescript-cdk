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
const DepositByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DepositByUserId"));
const RevertRecordReceipt_1 = tslib_1.__importDefault(require("../stampSheet/RevertRecordReceipt"));
const WithdrawByUserId_1 = tslib_1.__importDefault(require("../stampSheet/WithdrawByUserId"));
const RecordReceipt_1 = tslib_1.__importDefault(require("../stampSheet/RecordReceipt"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    deposit(slot, price, count, userId = "#{userId}") {
        return new DepositByUserId_1.default(this.namespaceName, slot, price, count, userId);
    }
    revertRecordReceipt(receipt, userId = "#{userId}") {
        return new RevertRecordReceipt_1.default(this.namespaceName, receipt, userId);
    }
    withdraw(slot, count, paidOnly, userId = "#{userId}") {
        return new WithdrawByUserId_1.default(this.namespaceName, slot, count, paidOnly, userId);
    }
    recordReceipt(contentsId, receipt, userId = "#{userId}") {
        return new RecordReceipt_1.default(this.namespaceName, contentsId, receipt, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "money",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map