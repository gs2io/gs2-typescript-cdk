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
    constructor(stack, name, serverType, serverSpec, options = null) {
        var _a, _b, _c, _d, _e, _f, _g;
        super("Realtime_Namespace_" + name);
        this.description = null;
        /** @deprecated */
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.syncSetting = null;
        this.stateMachineSetting = null;
        this.createNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.serverType = serverType;
        this.serverSpec = serverSpec;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.transactionSettingV2 = (_c = options === null || options === void 0 ? void 0 : options.transactionSettingV2) !== null && _c !== void 0 ? _c : null;
        this.syncSetting = (_d = options === null || options === void 0 ? void 0 : options.syncSetting) !== null && _d !== void 0 ? _d : null;
        this.stateMachineSetting = (_e = options === null || options === void 0 ? void 0 : options.stateMachineSetting) !== null && _e !== void 0 ? _e : null;
        this.createNotification = (_f = options === null || options === void 0 ? void 0 : options.createNotification) !== null && _f !== void 0 ? _f : null;
        this.logSetting = (_g = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _g !== void 0 ? _g : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Realtime::Namespace";
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
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = (_a = this.transactionSetting) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.transactionSettingV2 != null) {
            properties["TransactionSettingV2"] = (_b = this.transactionSettingV2) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.serverType != null) {
            properties["ServerType"] = this.serverType;
        }
        if (this.serverSpec != null) {
            properties["ServerSpec"] = this.serverSpec;
        }
        if (this.syncSetting != null) {
            properties["SyncSetting"] = (_c = this.syncSetting) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.stateMachineSetting != null) {
            properties["StateMachineSetting"] = (_d = this.stateMachineSetting) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.createNotification != null) {
            properties["CreateNotification"] = (_e = this.createNotification) === null || _e === void 0 ? void 0 : _e.properties();
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