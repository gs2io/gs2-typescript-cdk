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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        super("Inbox_Namespace_" + name);
        this.description = null;
        this.isAutomaticDeletingEnabled = null;
        this.transactionSetting = null;
        this.receiveMessageScript = null;
        this.readMessageScript = null;
        this.deleteMessageScript = null;
        this.receiveNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.isAutomaticDeletingEnabled = (_b = options === null || options === void 0 ? void 0 : options.isAutomaticDeletingEnabled) !== null && _b !== void 0 ? _b : null;
        this.transactionSetting = (_c = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _c !== void 0 ? _c : null;
        this.receiveMessageScript = (_d = options === null || options === void 0 ? void 0 : options.receiveMessageScript) !== null && _d !== void 0 ? _d : null;
        this.readMessageScript = (_e = options === null || options === void 0 ? void 0 : options.readMessageScript) !== null && _e !== void 0 ? _e : null;
        this.deleteMessageScript = (_f = options === null || options === void 0 ? void 0 : options.deleteMessageScript) !== null && _f !== void 0 ? _f : null;
        this.receiveNotification = (_g = options === null || options === void 0 ? void 0 : options.receiveNotification) !== null && _g !== void 0 ? _g : null;
        this.logSetting = (_h = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _h !== void 0 ? _h : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Inbox::Namespace";
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.isAutomaticDeletingEnabled != null) {
            properties["IsAutomaticDeletingEnabled"] = this.isAutomaticDeletingEnabled;
        }
        if (this.transactionSetting != null) {
            properties["TransactionSetting"] = this.transactionSetting.properties();
        }
        if (this.receiveMessageScript != null) {
            properties["ReceiveMessageScript"] = this.receiveMessageScript.properties();
        }
        if (this.readMessageScript != null) {
            properties["ReadMessageScript"] = this.readMessageScript.properties();
        }
        if (this.deleteMessageScript != null) {
            properties["DeleteMessageScript"] = this.deleteMessageScript.properties();
        }
        if (this.receiveNotification != null) {
            properties["ReceiveNotification"] = this.receiveNotification.properties();
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
    masterData(globalMessages) {
        new CurrentMasterData_1.default(this.stack, this.name, globalMessages).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map