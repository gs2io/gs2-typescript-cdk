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
const NamespaceRef_1 = tslib_1.__importDefault(require("../ref/NamespaceRef"));
const StateMachineMaster_1 = tslib_1.__importDefault(require("./StateMachineMaster"));
class Namespace extends model_1.CdkResource {
    constructor(stack, name, options = null) {
        var _a, _b, _c, _d, _e, _f;
        super("StateMachine_Namespace_" + name);
        this.description = null;
        this.startScript = null;
        this.passScript = null;
        this.errorScript = null;
        this.lowestStateMachineVersion = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.startScript = (_b = options === null || options === void 0 ? void 0 : options.startScript) !== null && _b !== void 0 ? _b : null;
        this.passScript = (_c = options === null || options === void 0 ? void 0 : options.passScript) !== null && _c !== void 0 ? _c : null;
        this.errorScript = (_d = options === null || options === void 0 ? void 0 : options.errorScript) !== null && _d !== void 0 ? _d : null;
        this.lowestStateMachineVersion = (_e = options === null || options === void 0 ? void 0 : options.lowestStateMachineVersion) !== null && _e !== void 0 ? _e : null;
        this.logSetting = (_f = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _f !== void 0 ? _f : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::StateMachine::Namespace";
    }
    properties() {
        var _a, _b, _c, _d;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.startScript != null) {
            properties["StartScript"] = (_a = this.startScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.passScript != null) {
            properties["PassScript"] = (_b = this.passScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.errorScript != null) {
            properties["ErrorScript"] = (_c = this.errorScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.lowestStateMachineVersion != null) {
            properties["LowestStateMachineVersion"] = this.lowestStateMachineVersion;
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_d = this.logSetting) === null || _d === void 0 ? void 0 : _d.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(null, null, "Item.NamespaceId");
    }
    stateMachine(scriptNamespace, definition) {
        definition.appendScripts(this.stack, scriptNamespace);
        new StateMachineMaster_1.default(this.stack, this.name, definition.stateMachineName, definition.gsl().replace("{scriptNamespaceName}", scriptNamespace.getName())).addDependsOn(this);
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map