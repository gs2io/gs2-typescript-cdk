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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super("AdReward_Namespace_" + name);
        this.admob = null;
        this.unityAd = null;
        this.appLovinMaxes = null;
        this.description = null;
        this.acquirePointScript = null;
        this.consumePointScript = null;
        this.changePointNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.admob = (_a = options === null || options === void 0 ? void 0 : options.admob) !== null && _a !== void 0 ? _a : null;
        this.unityAd = (_b = options === null || options === void 0 ? void 0 : options.unityAd) !== null && _b !== void 0 ? _b : null;
        this.appLovinMaxes = (_c = options === null || options === void 0 ? void 0 : options.appLovinMaxes) !== null && _c !== void 0 ? _c : null;
        this.description = (_d = options === null || options === void 0 ? void 0 : options.description) !== null && _d !== void 0 ? _d : null;
        this.acquirePointScript = (_e = options === null || options === void 0 ? void 0 : options.acquirePointScript) !== null && _e !== void 0 ? _e : null;
        this.consumePointScript = (_f = options === null || options === void 0 ? void 0 : options.consumePointScript) !== null && _f !== void 0 ? _f : null;
        this.changePointNotification = (_g = options === null || options === void 0 ? void 0 : options.changePointNotification) !== null && _g !== void 0 ? _g : null;
        this.logSetting = (_h = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _h !== void 0 ? _h : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::AdReward::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.admob != null) {
            properties["Admob"] = (_a = this.admob) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.unityAd != null) {
            properties["UnityAd"] = (_b = this.unityAd) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.appLovinMaxes != null) {
            properties["AppLovinMaxes"] = this.appLovinMaxes.map(v => v.properties());
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.acquirePointScript != null) {
            properties["AcquirePointScript"] = (_c = this.acquirePointScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.consumePointScript != null) {
            properties["ConsumePointScript"] = (_d = this.consumePointScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.changePointNotification != null) {
            properties["ChangePointNotification"] = (_e = this.changePointNotification) === null || _e === void 0 ? void 0 : _e.properties();
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
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map