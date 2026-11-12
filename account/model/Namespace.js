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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        super("Account_Namespace_" + name);
        this.description = null;
        /** @deprecated */
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.changePasswordIfTakeOver = null;
        this.differentUserIdForLoginAndDataRetention = null;
        this.createAccountScript = null;
        this.authenticationScript = null;
        this.createTakeOverScript = null;
        this.doTakeOverScript = null;
        this.banScript = null;
        this.unBanScript = null;
        this.accountDeletionSetting = null;
        this.requestDeletionScript = null;
        this.cancelDeletionScript = null;
        this.executeDeletionScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.transactionSettingV2 = (_c = options === null || options === void 0 ? void 0 : options.transactionSettingV2) !== null && _c !== void 0 ? _c : null;
        this.changePasswordIfTakeOver = (_d = options === null || options === void 0 ? void 0 : options.changePasswordIfTakeOver) !== null && _d !== void 0 ? _d : null;
        this.differentUserIdForLoginAndDataRetention = (_e = options === null || options === void 0 ? void 0 : options.differentUserIdForLoginAndDataRetention) !== null && _e !== void 0 ? _e : null;
        this.createAccountScript = (_f = options === null || options === void 0 ? void 0 : options.createAccountScript) !== null && _f !== void 0 ? _f : null;
        this.authenticationScript = (_g = options === null || options === void 0 ? void 0 : options.authenticationScript) !== null && _g !== void 0 ? _g : null;
        this.createTakeOverScript = (_h = options === null || options === void 0 ? void 0 : options.createTakeOverScript) !== null && _h !== void 0 ? _h : null;
        this.doTakeOverScript = (_j = options === null || options === void 0 ? void 0 : options.doTakeOverScript) !== null && _j !== void 0 ? _j : null;
        this.banScript = (_k = options === null || options === void 0 ? void 0 : options.banScript) !== null && _k !== void 0 ? _k : null;
        this.unBanScript = (_l = options === null || options === void 0 ? void 0 : options.unBanScript) !== null && _l !== void 0 ? _l : null;
        this.accountDeletionSetting = (_m = options === null || options === void 0 ? void 0 : options.accountDeletionSetting) !== null && _m !== void 0 ? _m : null;
        this.requestDeletionScript = (_o = options === null || options === void 0 ? void 0 : options.requestDeletionScript) !== null && _o !== void 0 ? _o : null;
        this.cancelDeletionScript = (_p = options === null || options === void 0 ? void 0 : options.cancelDeletionScript) !== null && _p !== void 0 ? _p : null;
        this.executeDeletionScript = (_q = options === null || options === void 0 ? void 0 : options.executeDeletionScript) !== null && _q !== void 0 ? _q : null;
        this.logSetting = (_r = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _r !== void 0 ? _r : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Account::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = (_a = this.transactionSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.transactionSettingV2 != null) {
            properties["TransactionSettingV2"] = (_b = this.transactionSettingV2) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.changePasswordIfTakeOver != null) {
            properties["ChangePasswordIfTakeOver"] = this.changePasswordIfTakeOver;
        }
        if (this.differentUserIdForLoginAndDataRetention != null) {
            properties["DifferentUserIdForLoginAndDataRetention"] = this.differentUserIdForLoginAndDataRetention;
        }
        if (this.createAccountScript != null) {
            properties["CreateAccountScript"] = (_c = this.createAccountScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.authenticationScript != null) {
            properties["AuthenticationScript"] = (_d = this.authenticationScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.createTakeOverScript != null) {
            properties["CreateTakeOverScript"] = (_e = this.createTakeOverScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.doTakeOverScript != null) {
            properties["DoTakeOverScript"] = (_f = this.doTakeOverScript) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.banScript != null) {
            properties["BanScript"] = (_g = this.banScript) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.unBanScript != null) {
            properties["UnBanScript"] = (_h = this.unBanScript) === null || _h === void 0 ? void 0 : _h.properties();
        }
        if (this.accountDeletionSetting != null) {
            properties["AccountDeletionSetting"] = (_j = this.accountDeletionSetting) === null || _j === void 0 ? void 0 : _j.properties();
        }
        if (this.requestDeletionScript != null) {
            properties["RequestDeletionScript"] = (_k = this.requestDeletionScript) === null || _k === void 0 ? void 0 : _k.properties();
        }
        if (this.cancelDeletionScript != null) {
            properties["CancelDeletionScript"] = (_l = this.cancelDeletionScript) === null || _l === void 0 ? void 0 : _l.properties();
        }
        if (this.executeDeletionScript != null) {
            properties["ExecuteDeletionScript"] = (_m = this.executeDeletionScript) === null || _m === void 0 ? void 0 : _m.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_o = this.logSetting) === null || _o === void 0 ? void 0 : _o.properties();
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