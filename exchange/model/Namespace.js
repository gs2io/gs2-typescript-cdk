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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super("Exchange_Namespace_" + name);
        this.description = null;
        this.enableAwaitExchange = null;
        this.enableDirectExchange = null;
        this.transactionSetting = null;
        this.exchangeScript = null;
        this.incrementalExchangeScript = null;
        this.acquireAwaitScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.enableAwaitExchange = (_b = options === null || options === void 0 ? void 0 : options.enableAwaitExchange) !== null && _b !== void 0 ? _b : null;
        this.enableDirectExchange = (_c = options === null || options === void 0 ? void 0 : options.enableDirectExchange) !== null && _c !== void 0 ? _c : null;
        this.transactionSetting = (_d = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _d !== void 0 ? _d : null;
        this.exchangeScript = (_e = options === null || options === void 0 ? void 0 : options.exchangeScript) !== null && _e !== void 0 ? _e : null;
        this.incrementalExchangeScript = (_f = options === null || options === void 0 ? void 0 : options.incrementalExchangeScript) !== null && _f !== void 0 ? _f : null;
        this.acquireAwaitScript = (_g = options === null || options === void 0 ? void 0 : options.acquireAwaitScript) !== null && _g !== void 0 ? _g : null;
        this.logSetting = (_h = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _h !== void 0 ? _h : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Exchange::Namespace";
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
        if (this.enableAwaitExchange != null) {
            properties["EnableAwaitExchange"] = this.enableAwaitExchange;
        }
        if (this.enableDirectExchange != null) {
            properties["EnableDirectExchange"] = this.enableDirectExchange;
        }
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = (_a = this.transactionSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.exchangeScript != null) {
            properties["ExchangeScript"] = (_b = this.exchangeScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.incrementalExchangeScript != null) {
            properties["IncrementalExchangeScript"] = (_c = this.incrementalExchangeScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.acquireAwaitScript != null) {
            properties["AcquireAwaitScript"] = (_d = this.acquireAwaitScript) === null || _d === void 0 ? void 0 : _d.properties();
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
    masterData(rateModels, incrementalRateModels) {
        new CurrentMasterData_1.default(this.stack, this.name, rateModels, incrementalRateModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map