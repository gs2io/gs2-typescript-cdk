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
const BalanceParameterModelRef_1 = tslib_1.__importDefault(require("./BalanceParameterModelRef"));
const RarityParameterModelRef_1 = tslib_1.__importDefault(require("./RarityParameterModelRef"));
const ReDrawBalanceParameterStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ReDrawBalanceParameterStatusByUserId"));
const SetBalanceParameterStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetBalanceParameterStatusByUserId"));
const ReDrawRarityParameterStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ReDrawRarityParameterStatusByUserId"));
const AddRarityParameterStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddRarityParameterStatusByUserId"));
const SetRarityParameterStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetRarityParameterStatusByUserId"));
const VerifyRarityParameterStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyRarityParameterStatusByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    balanceParameterModel(parameterName) {
        return new BalanceParameterModelRef_1.default(this.namespaceName, parameterName);
    }
    rarityParameterModel(parameterName) {
        return new RarityParameterModelRef_1.default(this.namespaceName, parameterName);
    }
    reDrawBalanceParameterStatus(parameterName, propertyId, fixedParameterNames = null, userId = "#{userId}") {
        return new ReDrawBalanceParameterStatusByUserId_1.default(this.namespaceName, parameterName, propertyId, fixedParameterNames, userId);
    }
    setBalanceParameterStatus(parameterName, propertyId, parameterValues, userId = "#{userId}") {
        return new SetBalanceParameterStatusByUserId_1.default(this.namespaceName, parameterName, propertyId, parameterValues, userId);
    }
    reDrawRarityParameterStatus(parameterName, propertyId, fixedParameterNames = null, userId = "#{userId}") {
        return new ReDrawRarityParameterStatusByUserId_1.default(this.namespaceName, parameterName, propertyId, fixedParameterNames, userId);
    }
    addRarityParameterStatus(parameterName, propertyId, count = null, userId = "#{userId}") {
        return new AddRarityParameterStatusByUserId_1.default(this.namespaceName, parameterName, propertyId, count, userId);
    }
    setRarityParameterStatus(parameterName, propertyId, parameterValues = null, userId = "#{userId}") {
        return new SetRarityParameterStatusByUserId_1.default(this.namespaceName, parameterName, propertyId, parameterValues, userId);
    }
    verifyRarityParameterStatus(parameterName, propertyId, verifyType, parameterValueName = null, parameterCount = null, userId = "#{userId}") {
        return new VerifyRarityParameterStatusByUserId_1.default(this.namespaceName, parameterName, propertyId, verifyType, parameterValueName, parameterCount, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "enchant",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map