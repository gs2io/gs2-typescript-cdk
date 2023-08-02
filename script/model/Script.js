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
const ScriptRef_1 = tslib_1.__importDefault(require("../ref/ScriptRef"));
class Script extends model_1.CdkResource {
    constructor(stack, namespaceName, name, script, options = null) {
        var _a;
        super("Script_Script_" + name);
        this.description = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.script = script;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Script::Script";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.script != null) {
            properties["Script"] = this.script;
        }
        return properties;
    }
    ref() {
        return new ScriptRef_1.default(this.namespaceName, this.name);
    }
    getAttrScriptId() {
        return new func_1.GetAttr(this, "Item.ScriptId", null);
    }
}
exports.default = Script;
//# sourceMappingURL=Script.js.map