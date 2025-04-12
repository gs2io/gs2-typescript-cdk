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
const StaminaModelRef_1 = tslib_1.__importDefault(require("./StaminaModelRef"));
const RecoverStaminaByUserId_1 = tslib_1.__importDefault(require("../stampSheet/RecoverStaminaByUserId"));
const RaiseMaxValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/RaiseMaxValueByUserId"));
const SetMaxValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetMaxValueByUserId"));
const SetRecoverIntervalByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetRecoverIntervalByUserId"));
const SetRecoverValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetRecoverValueByUserId"));
const DecreaseMaxValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DecreaseMaxValueByUserId"));
const ConsumeStaminaByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ConsumeStaminaByUserId"));
const VerifyStaminaValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyStaminaValueByUserId"));
const VerifyStaminaMaxValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyStaminaMaxValueByUserId"));
const VerifyStaminaRecoverIntervalMinutesByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyStaminaRecoverIntervalMinutesByUserId"));
const VerifyStaminaRecoverValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyStaminaRecoverValueByUserId"));
const VerifyStaminaOverflowValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyStaminaOverflowValueByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    staminaModel(staminaName) {
        return new StaminaModelRef_1.default(this.namespaceName, staminaName);
    }
    recoverStamina(staminaName, recoverValue, userId = "#{userId}") {
        return new RecoverStaminaByUserId_1.default(this.namespaceName, staminaName, recoverValue, userId);
    }
    raiseMaxValue(staminaName, raiseValue, userId = "#{userId}") {
        return new RaiseMaxValueByUserId_1.default(this.namespaceName, staminaName, raiseValue, userId);
    }
    setMaxValue(staminaName, maxValue, userId = "#{userId}") {
        return new SetMaxValueByUserId_1.default(this.namespaceName, staminaName, maxValue, userId);
    }
    setRecoverInterval(staminaName, recoverIntervalMinutes, userId = "#{userId}") {
        return new SetRecoverIntervalByUserId_1.default(this.namespaceName, staminaName, recoverIntervalMinutes, userId);
    }
    setRecoverValue(staminaName, recoverValue, userId = "#{userId}") {
        return new SetRecoverValueByUserId_1.default(this.namespaceName, staminaName, recoverValue, userId);
    }
    decreaseMaxValue(staminaName, decreaseValue, userId = "#{userId}") {
        return new DecreaseMaxValueByUserId_1.default(this.namespaceName, staminaName, decreaseValue, userId);
    }
    consumeStamina(staminaName, consumeValue, userId = "#{userId}") {
        return new ConsumeStaminaByUserId_1.default(this.namespaceName, staminaName, consumeValue, userId);
    }
    verifyStaminaValue(staminaName, verifyType, value, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyStaminaValueByUserId_1.default(this.namespaceName, staminaName, verifyType, value, multiplyValueSpecifyingQuantity, userId);
    }
    verifyStaminaMaxValue(staminaName, verifyType, value, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyStaminaMaxValueByUserId_1.default(this.namespaceName, staminaName, verifyType, value, multiplyValueSpecifyingQuantity, userId);
    }
    verifyStaminaRecoverIntervalMinutes(staminaName, verifyType, value, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyStaminaRecoverIntervalMinutesByUserId_1.default(this.namespaceName, staminaName, verifyType, value, multiplyValueSpecifyingQuantity, userId);
    }
    verifyStaminaRecoverValue(staminaName, verifyType, value, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyStaminaRecoverValueByUserId_1.default(this.namespaceName, staminaName, verifyType, value, multiplyValueSpecifyingQuantity, userId);
    }
    verifyStaminaOverflowValue(staminaName, verifyType, value, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyStaminaOverflowValueByUserId_1.default(this.namespaceName, staminaName, verifyType, value, multiplyValueSpecifyingQuantity, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "stamina",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map