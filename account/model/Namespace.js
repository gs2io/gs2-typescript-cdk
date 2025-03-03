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
    constructor(stack, name, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super("Account_Namespace_" + name);
        this.description = null;
        this.changePasswordIfTakeOver = null;
        this.differentUserIdForLoginAndDataRetention = null;
        this.createAccountScript = null;
        this.authenticationScript = null;
        this.createTakeOverScript = null;
        this.doTakeOverScript = null;
        this.banScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.changePasswordIfTakeOver = (_b = options === null || options === void 0 ? void 0 : options.changePasswordIfTakeOver) !== null && _b !== void 0 ? _b : null;
        this.differentUserIdForLoginAndDataRetention = (_c = options === null || options === void 0 ? void 0 : options.differentUserIdForLoginAndDataRetention) !== null && _c !== void 0 ? _c : null;
        this.createAccountScript = (_d = options === null || options === void 0 ? void 0 : options.createAccountScript) !== null && _d !== void 0 ? _d : null;
        this.authenticationScript = (_e = options === null || options === void 0 ? void 0 : options.authenticationScript) !== null && _e !== void 0 ? _e : null;
        this.createTakeOverScript = (_f = options === null || options === void 0 ? void 0 : options.createTakeOverScript) !== null && _f !== void 0 ? _f : null;
        this.doTakeOverScript = (_g = options === null || options === void 0 ? void 0 : options.doTakeOverScript) !== null && _g !== void 0 ? _g : null;
        this.banScript = (_h = options === null || options === void 0 ? void 0 : options.banScript) !== null && _h !== void 0 ? _h : null;
        this.logSetting = (_j = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _j !== void 0 ? _j : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Account::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.changePasswordIfTakeOver != null) {
            properties["ChangePasswordIfTakeOver"] = this.changePasswordIfTakeOver;
        }
        if (this.differentUserIdForLoginAndDataRetention != null) {
            properties["DifferentUserIdForLoginAndDataRetention"] = this.differentUserIdForLoginAndDataRetention;
        }
        if (this.createAccountScript != null) {
            properties["CreateAccountScript"] = (_a = this.createAccountScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.authenticationScript != null) {
            properties["AuthenticationScript"] = (_b = this.authenticationScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.createTakeOverScript != null) {
            properties["CreateTakeOverScript"] = (_c = this.createTakeOverScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.doTakeOverScript != null) {
            properties["DoTakeOverScript"] = (_d = this.doTakeOverScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.banScript != null) {
            properties["BanScript"] = (_e = this.banScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_f = this.logSetting) === null || _f === void 0 ? void 0 : _f.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(takeOverTypeModels) {
        new CurrentMasterData_1.default(this.stack, this.name, takeOverTypeModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map