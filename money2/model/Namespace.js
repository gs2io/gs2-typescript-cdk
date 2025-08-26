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
    constructor(stack, name, currencyUsagePriority, sharedFreeCurrency, platformSetting, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super("Money2_Namespace_" + name);
        this.description = null;
        this.depositBalanceScript = null;
        this.withdrawBalanceScript = null;
        this.verifyReceiptScript = null;
        this.subscribeScript = null;
        this.renewScript = null;
        this.unsubscribeScript = null;
        this.takeOverScript = null;
        this.changeSubscriptionStatusNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.currencyUsagePriority = currencyUsagePriority;
        this.sharedFreeCurrency = sharedFreeCurrency;
        this.platformSetting = platformSetting;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.depositBalanceScript = (_b = options === null || options === void 0 ? void 0 : options.depositBalanceScript) !== null && _b !== void 0 ? _b : null;
        this.withdrawBalanceScript = (_c = options === null || options === void 0 ? void 0 : options.withdrawBalanceScript) !== null && _c !== void 0 ? _c : null;
        this.verifyReceiptScript = (_d = options === null || options === void 0 ? void 0 : options.verifyReceiptScript) !== null && _d !== void 0 ? _d : null;
        this.subscribeScript = (_e = options === null || options === void 0 ? void 0 : options.subscribeScript) !== null && _e !== void 0 ? _e : null;
        this.renewScript = (_f = options === null || options === void 0 ? void 0 : options.renewScript) !== null && _f !== void 0 ? _f : null;
        this.unsubscribeScript = (_g = options === null || options === void 0 ? void 0 : options.unsubscribeScript) !== null && _g !== void 0 ? _g : null;
        this.takeOverScript = (_h = options === null || options === void 0 ? void 0 : options.takeOverScript) !== null && _h !== void 0 ? _h : null;
        this.changeSubscriptionStatusNotification = (_j = options === null || options === void 0 ? void 0 : options.changeSubscriptionStatusNotification) !== null && _j !== void 0 ? _j : null;
        this.logSetting = (_k = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _k !== void 0 ? _k : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Money2::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.currencyUsagePriority != null) {
            properties["CurrencyUsagePriority"] = this.currencyUsagePriority;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.sharedFreeCurrency != null) {
            properties["SharedFreeCurrency"] = this.sharedFreeCurrency;
        }
        if (this.platformSetting != null) {
            properties["PlatformSetting"] = (_a = this.platformSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.depositBalanceScript != null) {
            properties["DepositBalanceScript"] = (_b = this.depositBalanceScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.withdrawBalanceScript != null) {
            properties["WithdrawBalanceScript"] = (_c = this.withdrawBalanceScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.verifyReceiptScript != null) {
            properties["VerifyReceiptScript"] = (_d = this.verifyReceiptScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.subscribeScript != null) {
            properties["SubscribeScript"] = this.subscribeScript;
        }
        if (this.renewScript != null) {
            properties["RenewScript"] = this.renewScript;
        }
        if (this.unsubscribeScript != null) {
            properties["UnsubscribeScript"] = this.unsubscribeScript;
        }
        if (this.takeOverScript != null) {
            properties["TakeOverScript"] = (_e = this.takeOverScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.changeSubscriptionStatusNotification != null) {
            properties["ChangeSubscriptionStatusNotification"] = (_f = this.changeSubscriptionStatusNotification) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_g = this.logSetting) === null || _g === void 0 ? void 0 : _g.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(storeContentModels, storeSubscriptionContentModels) {
        new CurrentMasterData_1.default(this.stack, this.name, storeContentModels, storeSubscriptionContentModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map