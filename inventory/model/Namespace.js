"use strict";
/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
const NamespaceRef_1 = tslib_1.__importDefault(require("../ref/NamespaceRef"));
class Namespace extends core_1.default.CdkResource {
    constructor(stack, name, options) {
        var _a, _b, _c, _d, _e;
        super("Inventory_Namespace_" + name);
        this.description = null;
        this.acquireScript = null;
        this.overflowScript = null;
        this.consumeScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.acquireScript = (_b = options === null || options === void 0 ? void 0 : options.acquireScript) !== null && _b !== void 0 ? _b : null;
        this.overflowScript = (_c = options === null || options === void 0 ? void 0 : options.overflowScript) !== null && _c !== void 0 ? _c : null;
        this.consumeScript = (_d = options === null || options === void 0 ? void 0 : options.consumeScript) !== null && _d !== void 0 ? _d : null;
        this.logSetting = (_e = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _e !== void 0 ? _e : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Inventory::Namespace";
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.acquireScript != null) {
            properties["AcquireScript"] = this.acquireScript.properties();
        }
        if (this.overflowScript != null) {
            properties["OverflowScript"] = this.overflowScript.properties();
        }
        if (this.consumeScript != null) {
            properties["ConsumeScript"] = this.consumeScript.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = this.logSetting.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(null, null, "Item.NamespaceId");
    }
    masterData(inventoryModels) {
        new CurrentMasterData_1.default(this.stack, this.name, inventoryModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map