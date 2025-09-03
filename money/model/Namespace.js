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
class Namespace extends model_1.CdkResource {
    constructor(stack, name, priority, shareFree, currency, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super("Money_Namespace_" + name);
        this.description = null;
        this.transactionSetting = null;
        this.appleKey = null;
        this.googleKey = null;
        this.enableFakeReceipt = null;
        this.createWalletScript = null;
        this.depositScript = null;
        this.withdrawScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.priority = priority;
        this.shareFree = shareFree;
        this.currency = currency;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.appleKey = (_c = options === null || options === void 0 ? void 0 : options.appleKey) !== null && _c !== void 0 ? _c : null;
        this.googleKey = (_d = options === null || options === void 0 ? void 0 : options.googleKey) !== null && _d !== void 0 ? _d : null;
        this.enableFakeReceipt = (_e = options === null || options === void 0 ? void 0 : options.enableFakeReceipt) !== null && _e !== void 0 ? _e : null;
        this.createWalletScript = (_f = options === null || options === void 0 ? void 0 : options.createWalletScript) !== null && _f !== void 0 ? _f : null;
        this.depositScript = (_g = options === null || options === void 0 ? void 0 : options.depositScript) !== null && _g !== void 0 ? _g : null;
        this.withdrawScript = (_h = options === null || options === void 0 ? void 0 : options.withdrawScript) !== null && _h !== void 0 ? _h : null;
        this.logSetting = (_j = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _j !== void 0 ? _j : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Money::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e;
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
        if (this.priority != null) {
            properties["Priority"] = this.priority;
        }
        if (this.shareFree != null) {
            properties["ShareFree"] = this.shareFree;
        }
        if (this.currency != null) {
            properties["Currency"] = this.currency;
        }
        if (this.appleKey != null) {
            properties["AppleKey"] = this.appleKey;
        }
        if (this.googleKey != null) {
            properties["GoogleKey"] = this.googleKey;
        }
        if (this.enableFakeReceipt != null) {
            properties["EnableFakeReceipt"] = this.enableFakeReceipt;
        }
        if (this.createWalletScript != null) {
            properties["CreateWalletScript"] = (_b = this.createWalletScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.depositScript != null) {
            properties["DepositScript"] = (_c = this.depositScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.withdrawScript != null) {
            properties["WithdrawScript"] = (_d = this.withdrawScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_e = this.logSetting) === null || _e === void 0 ? void 0 : _e.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map