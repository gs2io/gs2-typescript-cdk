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
        super("Guild_Namespace_" + name);
        this.description = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.changeMemberNotification = null;
        this.receiveRequestNotification = null;
        this.removeRequestNotification = null;
        this.createGuildScript = null;
        this.joinGuildScript = null;
        this.leaveGuildScript = null;
        this.changeRoleScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.joinNotification = (_b = options === null || options === void 0 ? void 0 : options.joinNotification) !== null && _b !== void 0 ? _b : null;
        this.leaveNotification = (_c = options === null || options === void 0 ? void 0 : options.leaveNotification) !== null && _c !== void 0 ? _c : null;
        this.changeMemberNotification = (_d = options === null || options === void 0 ? void 0 : options.changeMemberNotification) !== null && _d !== void 0 ? _d : null;
        this.receiveRequestNotification = (_e = options === null || options === void 0 ? void 0 : options.receiveRequestNotification) !== null && _e !== void 0 ? _e : null;
        this.removeRequestNotification = (_f = options === null || options === void 0 ? void 0 : options.removeRequestNotification) !== null && _f !== void 0 ? _f : null;
        this.createGuildScript = (_g = options === null || options === void 0 ? void 0 : options.createGuildScript) !== null && _g !== void 0 ? _g : null;
        this.joinGuildScript = (_h = options === null || options === void 0 ? void 0 : options.joinGuildScript) !== null && _h !== void 0 ? _h : null;
        this.leaveGuildScript = (_j = options === null || options === void 0 ? void 0 : options.leaveGuildScript) !== null && _j !== void 0 ? _j : null;
        this.changeRoleScript = (_k = options === null || options === void 0 ? void 0 : options.changeRoleScript) !== null && _k !== void 0 ? _k : null;
        this.logSetting = (_l = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _l !== void 0 ? _l : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Guild::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.joinNotification != null) {
            properties["JoinNotification"] = (_a = this.joinNotification) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.leaveNotification != null) {
            properties["LeaveNotification"] = (_b = this.leaveNotification) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.changeMemberNotification != null) {
            properties["ChangeMemberNotification"] = (_c = this.changeMemberNotification) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.receiveRequestNotification != null) {
            properties["ReceiveRequestNotification"] = (_d = this.receiveRequestNotification) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.removeRequestNotification != null) {
            properties["RemoveRequestNotification"] = (_e = this.removeRequestNotification) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.createGuildScript != null) {
            properties["CreateGuildScript"] = (_f = this.createGuildScript) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.joinGuildScript != null) {
            properties["JoinGuildScript"] = (_g = this.joinGuildScript) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.leaveGuildScript != null) {
            properties["LeaveGuildScript"] = (_h = this.leaveGuildScript) === null || _h === void 0 ? void 0 : _h.properties();
        }
        if (this.changeRoleScript != null) {
            properties["ChangeRoleScript"] = (_j = this.changeRoleScript) === null || _j === void 0 ? void 0 : _j.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_k = this.logSetting) === null || _k === void 0 ? void 0 : _k.properties();
        }
        return properties;
    }
    ref() {
        return new NamespaceRef_1.default(this.name);
    }
    getAttrNamespaceId() {
        return new func_1.GetAttr(this, "Item.NamespaceId", null);
    }
    masterData(guildModels) {
        new CurrentMasterData_1.default(this.stack, this.name, guildModels).addDependsOn(this);
        return this;
    }
}
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map