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
const model_1 = require("../../core/model");
const func_1 = require("../../core/func");
const NamespaceRef_1 = tslib_1.__importDefault(require("../ref/NamespaceRef"));
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
class Namespace extends model_1.CdkResource {
    constructor(stack, name, assumeUserId, options = null) {
        var _a, _b, _c, _d;
        super("Version_Namespace_" + name);
        this.description = null;
        this.acceptVersionScript = null;
        this.checkVersionTriggerScriptId = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.assumeUserId = assumeUserId;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.acceptVersionScript = (_b = options === null || options === void 0 ? void 0 : options.acceptVersionScript) !== null && _b !== void 0 ? _b : null;
        this.checkVersionTriggerScriptId = (_c = options === null || options === void 0 ? void 0 : options.checkVersionTriggerScriptId) !== null && _c !== void 0 ? _c : null;
        this.logSetting = (_d = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _d !== void 0 ? _d : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Version::Namespace";
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.assumeUserId != null) {
            properties["AssumeUserId"] = this.assumeUserId;
        }
        if (this.acceptVersionScript != null) {
            properties["AcceptVersionScript"] = (_a = this.acceptVersionScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.checkVersionTriggerScriptId != null) {
            properties["CheckVersionTriggerScriptId"] = this.checkVersionTriggerScriptId;
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_b = this.logSetting) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(versionModels) {
        new CurrentMasterData_1.default(this.stack, this.name, versionModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map