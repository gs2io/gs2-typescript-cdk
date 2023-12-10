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
 *
 * deny overwrite
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_1 = require("../../core/model");
const func_1 = require("../../core/func");
const StateMachineMasterRef_1 = tslib_1.__importDefault(require("../ref/StateMachineMasterRef"));
class StateMachineMaster extends model_1.CdkResource {
    constructor(stack, namespaceName, mainStateMachineName, payload, options = null) {
        super("StateMachine_StateMachineMaster_" + namespaceName);
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.mainStateMachineName = mainStateMachineName;
        this.payload = payload;
        stack.addResource(this);
    }
    alternateKeys() {
        return "version";
    }
    resourceType() {
        return "GS2::StateMachine::StateMachineMaster";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.mainStateMachineName != null) {
            properties["MainStateMachineName"] = this.mainStateMachineName;
        }
        if (this.payload != null) {
            properties["Payload"] = this.payload;
        }
        return properties;
    }
    ref(version) {
        return new StateMachineMasterRef_1.default(this.namespaceName, version);
    }
    getAttrStateMachineId() {
        return new func_1.GetAttr(this, "Item.StateMachineId", null);
    }
}
exports.default = StateMachineMaster;
//# sourceMappingURL=StateMachineMaster.js.map