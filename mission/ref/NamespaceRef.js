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
const MissionGroupModelRef_1 = tslib_1.__importDefault(require("./MissionGroupModelRef"));
const CounterModelRef_1 = tslib_1.__importDefault(require("./CounterModelRef"));
const RevertReceiveByUserId_1 = tslib_1.__importDefault(require("../stampSheet/RevertReceiveByUserId"));
const IncreaseCounterByUserId_1 = tslib_1.__importDefault(require("../stampSheet/IncreaseCounterByUserId"));
const SetCounterByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetCounterByUserId"));
const ReceiveByUserId_1 = tslib_1.__importDefault(require("../stampSheet/ReceiveByUserId"));
const DecreaseCounterByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DecreaseCounterByUserId"));
const VerifyCounterValueByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyCounterValueByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    missionGroupModel(missionGroupName) {
        return new MissionGroupModelRef_1.default(this.namespaceName, missionGroupName);
    }
    counterModel(counterName) {
        return new CounterModelRef_1.default(this.namespaceName, counterName);
    }
    revertReceive(missionGroupName, missionTaskName, userId = "#{userId}") {
        return new RevertReceiveByUserId_1.default(this.namespaceName, missionGroupName, missionTaskName, userId);
    }
    increaseCounter(counterName, value, userId = "#{userId}") {
        return new IncreaseCounterByUserId_1.default(this.namespaceName, counterName, value, userId);
    }
    setCounter(counterName, values = null, userId = "#{userId}") {
        return new SetCounterByUserId_1.default(this.namespaceName, counterName, values, userId);
    }
    receive(missionGroupName, missionTaskName, userId = "#{userId}") {
        return new ReceiveByUserId_1.default(this.namespaceName, missionGroupName, missionTaskName, userId);
    }
    decreaseCounter(counterName, value, userId = "#{userId}") {
        return new DecreaseCounterByUserId_1.default(this.namespaceName, counterName, value, userId);
    }
    verifyCounterValue(counterName, verifyType, resetType, value = null, multiplyValueSpecifyingQuantity = null, userId = "#{userId}") {
        return new VerifyCounterValueByUserId_1.default(this.namespaceName, counterName, verifyType, resetType, value, multiplyValueSpecifyingQuantity, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "mission",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map