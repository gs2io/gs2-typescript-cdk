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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        super("Guild_Namespace_" + name);
        this.description = null;
        this.transactionSetting = null;
        this.changeNotification = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.changeMemberNotification = null;
        this.receiveRequestNotification = null;
        this.removeRequestNotification = null;
        this.createGuildScript = null;
        this.updateGuildScript = null;
        this.joinGuildScript = null;
        this.receiveJoinRequestScript = null;
        this.leaveGuildScript = null;
        this.changeRoleScript = null;
        this.deleteGuildScript = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.changeNotification = (_c = options === null || options === void 0 ? void 0 : options.changeNotification) !== null && _c !== void 0 ? _c : null;
        this.joinNotification = (_d = options === null || options === void 0 ? void 0 : options.joinNotification) !== null && _d !== void 0 ? _d : null;
        this.leaveNotification = (_e = options === null || options === void 0 ? void 0 : options.leaveNotification) !== null && _e !== void 0 ? _e : null;
        this.changeMemberNotification = (_f = options === null || options === void 0 ? void 0 : options.changeMemberNotification) !== null && _f !== void 0 ? _f : null;
        this.receiveRequestNotification = (_g = options === null || options === void 0 ? void 0 : options.receiveRequestNotification) !== null && _g !== void 0 ? _g : null;
        this.removeRequestNotification = (_h = options === null || options === void 0 ? void 0 : options.removeRequestNotification) !== null && _h !== void 0 ? _h : null;
        this.createGuildScript = (_j = options === null || options === void 0 ? void 0 : options.createGuildScript) !== null && _j !== void 0 ? _j : null;
        this.updateGuildScript = (_k = options === null || options === void 0 ? void 0 : options.updateGuildScript) !== null && _k !== void 0 ? _k : null;
        this.joinGuildScript = (_l = options === null || options === void 0 ? void 0 : options.joinGuildScript) !== null && _l !== void 0 ? _l : null;
        this.receiveJoinRequestScript = (_m = options === null || options === void 0 ? void 0 : options.receiveJoinRequestScript) !== null && _m !== void 0 ? _m : null;
        this.leaveGuildScript = (_o = options === null || options === void 0 ? void 0 : options.leaveGuildScript) !== null && _o !== void 0 ? _o : null;
        this.changeRoleScript = (_p = options === null || options === void 0 ? void 0 : options.changeRoleScript) !== null && _p !== void 0 ? _p : null;
        this.deleteGuildScript = (_q = options === null || options === void 0 ? void 0 : options.deleteGuildScript) !== null && _q !== void 0 ? _q : null;
        this.logSetting = (_r = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _r !== void 0 ? _r : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Guild::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
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
        if (this.changeNotification != null) {
            properties["ChangeNotification"] = (_b = this.changeNotification) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.joinNotification != null) {
            properties["JoinNotification"] = (_c = this.joinNotification) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.leaveNotification != null) {
            properties["LeaveNotification"] = (_d = this.leaveNotification) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.changeMemberNotification != null) {
            properties["ChangeMemberNotification"] = (_e = this.changeMemberNotification) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.receiveRequestNotification != null) {
            properties["ReceiveRequestNotification"] = (_f = this.receiveRequestNotification) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.removeRequestNotification != null) {
            properties["RemoveRequestNotification"] = (_g = this.removeRequestNotification) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.createGuildScript != null) {
            properties["CreateGuildScript"] = (_h = this.createGuildScript) === null || _h === void 0 ? void 0 : _h.properties();
        }
        if (this.updateGuildScript != null) {
            properties["UpdateGuildScript"] = (_j = this.updateGuildScript) === null || _j === void 0 ? void 0 : _j.properties();
        }
        if (this.joinGuildScript != null) {
            properties["JoinGuildScript"] = (_k = this.joinGuildScript) === null || _k === void 0 ? void 0 : _k.properties();
        }
        if (this.receiveJoinRequestScript != null) {
            properties["ReceiveJoinRequestScript"] = (_l = this.receiveJoinRequestScript) === null || _l === void 0 ? void 0 : _l.properties();
        }
        if (this.leaveGuildScript != null) {
            properties["LeaveGuildScript"] = (_m = this.leaveGuildScript) === null || _m === void 0 ? void 0 : _m.properties();
        }
        if (this.changeRoleScript != null) {
            properties["ChangeRoleScript"] = (_o = this.changeRoleScript) === null || _o === void 0 ? void 0 : _o.properties();
        }
        if (this.deleteGuildScript != null) {
            properties["DeleteGuildScript"] = (_p = this.deleteGuildScript) === null || _p === void 0 ? void 0 : _p.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_q = this.logSetting) === null || _q === void 0 ? void 0 : _q.properties();
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