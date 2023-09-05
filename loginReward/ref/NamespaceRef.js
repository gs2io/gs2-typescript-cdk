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
const BonusModelRef_1 = tslib_1.__importDefault(require("./BonusModelRef"));
const DeleteReceiveStatusByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteReceiveStatusByUserId"));
const UnmarkReceivedByUserId_1 = tslib_1.__importDefault(require("../stampSheet/UnmarkReceivedByUserId"));
const MarkReceivedByUserId_1 = tslib_1.__importDefault(require("../stampSheet/MarkReceivedByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    bonusModel(bonusModelName) {
        return new BonusModelRef_1.default(this.namespaceName, bonusModelName);
    }
    deleteReceiveStatus(bonusModelName, userId = "#{userId}") {
        return new DeleteReceiveStatusByUserId_1.default(this.namespaceName, bonusModelName, userId);
    }
    unmarkReceived(bonusModelName, stepNumber, userId = "#{userId}") {
        return new UnmarkReceivedByUserId_1.default(this.namespaceName, bonusModelName, stepNumber, userId);
    }
    markReceived(bonusModelName, stepNumber, userId = "#{userId}") {
        return new MarkReceivedByUserId_1.default(this.namespaceName, bonusModelName, stepNumber, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "loginReward",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map