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
    constructor(stack, name, options = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super("AdReward_Namespace_" + name);
        this.description = null;
        this.transactionSetting = null;
        this.admob = null;
        this.unityAd = null;
        this.appLovinMaxes = null;
        this.acquirePointScript = null;
        this.consumePointScript = null;
        this.changePointNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.admob = (_c = options === null || options === void 0 ? void 0 : options.admob) !== null && _c !== void 0 ? _c : null;
        this.unityAd = (_d = options === null || options === void 0 ? void 0 : options.unityAd) !== null && _d !== void 0 ? _d : null;
        this.appLovinMaxes = (_e = options === null || options === void 0 ? void 0 : options.appLovinMaxes) !== null && _e !== void 0 ? _e : null;
        this.acquirePointScript = (_f = options === null || options === void 0 ? void 0 : options.acquirePointScript) !== null && _f !== void 0 ? _f : null;
        this.consumePointScript = (_g = options === null || options === void 0 ? void 0 : options.consumePointScript) !== null && _g !== void 0 ? _g : null;
        this.changePointNotification = (_h = options === null || options === void 0 ? void 0 : options.changePointNotification) !== null && _h !== void 0 ? _h : null;
        this.logSetting = (_j = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _j !== void 0 ? _j : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::AdReward::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g;
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
        if (this.admob != null) {
            properties["Admob"] = (_b = this.admob) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.unityAd != null) {
            properties["UnityAd"] = (_c = this.unityAd) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.appLovinMaxes != null) {
            properties["AppLovinMaxes"] = this.appLovinMaxes.map(v => v.properties());
        }
        if (this.acquirePointScript != null) {
            properties["AcquirePointScript"] = (_d = this.acquirePointScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.consumePointScript != null) {
            properties["ConsumePointScript"] = (_e = this.consumePointScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.changePointNotification != null) {
            properties["ChangePointNotification"] = (_f = this.changePointNotification) === null || _f === void 0 ? void 0 : _f.properties();
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
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map