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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super("Chat_Namespace_" + name);
        this.description = null;
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
        this.allowCreateRoom = (_b = options === null || options === void 0 ? void 0 : options.allowCreateRoom) !== null && _b !== void 0 ? _b : null;
        this.messageLifeTimeDays = (_c = options === null || options === void 0 ? void 0 : options.messageLifeTimeDays) !== null && _c !== void 0 ? _c : null;
        this.postMessageScript = (_d = options === null || options === void 0 ? void 0 : options.postMessageScript) !== null && _d !== void 0 ? _d : null;
        this.createRoomScript = (_e = options === null || options === void 0 ? void 0 : options.createRoomScript) !== null && _e !== void 0 ? _e : null;
        this.deleteRoomScript = (_f = options === null || options === void 0 ? void 0 : options.deleteRoomScript) !== null && _f !== void 0 ? _f : null;
        this.subscribeRoomScript = (_g = options === null || options === void 0 ? void 0 : options.subscribeRoomScript) !== null && _g !== void 0 ? _g : null;
        this.unsubscribeRoomScript = (_h = options === null || options === void 0 ? void 0 : options.unsubscribeRoomScript) !== null && _h !== void 0 ? _h : null;
        this.postNotification = (_j = options === null || options === void 0 ? void 0 : options.postNotification) !== null && _j !== void 0 ? _j : null;
        this.logSetting = (_k = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _k !== void 0 ? _k : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Chat::Namespace";
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
        if (this.allowCreateRoom != null) {
            properties["AllowCreateRoom"] = this.allowCreateRoom;
        }
        if (this.messageLifeTimeDays != null) {
            properties["MessageLifeTimeDays"] = this.messageLifeTimeDays;
        }
        if (this.postMessageScript != null) {
            properties["PostMessageScript"] = (_a = this.postMessageScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.createRoomScript != null) {
            properties["CreateRoomScript"] = (_b = this.createRoomScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.deleteRoomScript != null) {
            properties["DeleteRoomScript"] = (_c = this.deleteRoomScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.subscribeRoomScript != null) {
            properties["SubscribeRoomScript"] = (_d = this.subscribeRoomScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.unsubscribeRoomScript != null) {
            properties["UnsubscribeRoomScript"] = (_e = this.unsubscribeRoomScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.postNotification != null) {
            properties["PostNotification"] = (_f = this.postNotification) === null || _f === void 0 ? void 0 : _f.properties();
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