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
const LimitModelRef_1 = tslib_1.__importDefault(require("./LimitModelRef"));
const CountDownByUserId_1 = tslib_1.__importDefault(require("../stampSheet/CountDownByUserId"));
const DeleteCounterByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteCounterByUserId"));
const CountUpByUserId_1 = tslib_1.__importDefault(require("../stampSheet/CountUpByUserId"));
const VerifyCounterByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyCounterByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    limitModel(limitName) {
        return new LimitModelRef_1.default(this.namespaceName, limitName);
    }
    countDown(limitName, counterName, countDownValue = null, userId = "#{userId}") {
        return new CountDownByUserId_1.default(this.namespaceName, limitName, counterName, countDownValue, userId);
    }
    deleteCounter(limitName, counterName, userId = "#{userId}") {
        return new DeleteCounterByUserId_1.default(this.namespaceName, limitName, counterName, userId);
    }
    countUp(limitName, counterName, countUpValue = null, maxValue = null, userId = "#{userId}") {
        return new CountUpByUserId_1.default(this.namespaceName, limitName, counterName, countUpValue, maxValue, userId);
    }
    verifyCounter(limitName, counterName, verifyType, count = null, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyCounterByUserId_1.default(this.namespaceName, limitName, counterName, verifyType, count, multiplyValueSpecifyingQuantity, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "limit",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map