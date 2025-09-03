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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        super("Chat_Namespace_" + name);
        this.description = null;
        this.transactionSetting = null;
        this.allowCreateRoom = null;
        this.messageLifeTimeDays = null;
        this.postMessageScript = null;
        this.createRoomScript = null;
        this.deleteRoomScript = null;
        this.subscribeRoomScript = null;
        this.unsubscribeRoomScript = null;
        this.postNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.allowCreateRoom = (_c = options === null || options === void 0 ? void 0 : options.allowCreateRoom) !== null && _c !== void 0 ? _c : null;
        this.messageLifeTimeDays = (_d = options === null || options === void 0 ? void 0 : options.messageLifeTimeDays) !== null && _d !== void 0 ? _d : null;
        this.postMessageScript = (_e = options === null || options === void 0 ? void 0 : options.postMessageScript) !== null && _e !== void 0 ? _e : null;
        this.createRoomScript = (_f = options === null || options === void 0 ? void 0 : options.createRoomScript) !== null && _f !== void 0 ? _f : null;
        this.deleteRoomScript = (_g = options === null || options === void 0 ? void 0 : options.deleteRoomScript) !== null && _g !== void 0 ? _g : null;
        this.subscribeRoomScript = (_h = options === null || options === void 0 ? void 0 : options.subscribeRoomScript) !== null && _h !== void 0 ? _h : null;
        this.unsubscribeRoomScript = (_j = options === null || options === void 0 ? void 0 : options.unsubscribeRoomScript) !== null && _j !== void 0 ? _j : null;
        this.postNotification = (_k = options === null || options === void 0 ? void 0 : options.postNotification) !== null && _k !== void 0 ? _k : null;
        this.logSetting = (_l = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _l !== void 0 ? _l : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Chat::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
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
        if (this.allowCreateRoom != null) {
            properties["AllowCreateRoom"] = this.allowCreateRoom;
        }
        if (this.messageLifeTimeDays != null) {
            properties["MessageLifeTimeDays"] = this.messageLifeTimeDays;
        }
        if (this.postMessageScript != null) {
            properties["PostMessageScript"] = (_b = this.postMessageScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.createRoomScript != null) {
            properties["CreateRoomScript"] = (_c = this.createRoomScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.deleteRoomScript != null) {
            properties["DeleteRoomScript"] = (_d = this.deleteRoomScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.subscribeRoomScript != null) {
            properties["SubscribeRoomScript"] = (_e = this.subscribeRoomScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.unsubscribeRoomScript != null) {
            properties["UnsubscribeRoomScript"] = (_f = this.unsubscribeRoomScript) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.postNotification != null) {
            properties["PostNotification"] = (_g = this.postNotification) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_h = this.logSetting) === null || _h === void 0 ? void 0 : _h.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(categoryModels) {
        new CurrentMasterData_1.default(this.stack, this.name, categoryModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map