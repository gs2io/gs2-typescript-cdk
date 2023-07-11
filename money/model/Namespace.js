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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super("Money_Namespace_" + name);
        this.description = null;
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
        this.appleKey = (_b = options === null || options === void 0 ? void 0 : options.appleKey) !== null && _b !== void 0 ? _b : null;
        this.googleKey = (_c = options === null || options === void 0 ? void 0 : options.googleKey) !== null && _c !== void 0 ? _c : null;
        this.enableFakeReceipt = (_d = options === null || options === void 0 ? void 0 : options.enableFakeReceipt) !== null && _d !== void 0 ? _d : null;
        this.createWalletScript = (_e = options === null || options === void 0 ? void 0 : options.createWalletScript) !== null && _e !== void 0 ? _e : null;
        this.depositScript = (_f = options === null || options === void 0 ? void 0 : options.depositScript) !== null && _f !== void 0 ? _f : null;
        this.withdrawScript = (_g = options === null || options === void 0 ? void 0 : options.withdrawScript) !== null && _g !== void 0 ? _g : null;
        this.logSetting = (_h = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _h !== void 0 ? _h : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Money::Namespace";
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
            properties["CreateWalletScript"] = (_a = this.createWalletScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.depositScript != null) {
            properties["DepositScript"] = (_b = this.depositScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.withdrawScript != null) {
            properties["WithdrawScript"] = (_c = this.withdrawScript) === null || _c === void 0 ? void 0 : _c.properties();
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
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map