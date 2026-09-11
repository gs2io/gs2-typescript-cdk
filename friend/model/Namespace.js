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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        super("Friend_Namespace_" + name);
        this.description = null;
        /** @deprecated */
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.followScript = null;
        this.unfollowScript = null;
        this.sendRequestScript = null;
        this.cancelRequestScript = null;
        this.acceptRequestScript = null;
        this.rejectRequestScript = null;
        this.deleteFriendScript = null;
        this.updateProfileScript = null;
        this.followNotification = null;
        this.receiveRequestNotification = null;
        this.cancelRequestNotification = null;
        this.acceptRequestNotification = null;
        this.rejectRequestNotification = null;
        this.deleteFriendNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.transactionSetting = (_b = options === null || options === void 0 ? void 0 : options.transactionSetting) !== null && _b !== void 0 ? _b : null;
        this.transactionSettingV2 = (_c = options === null || options === void 0 ? void 0 : options.transactionSettingV2) !== null && _c !== void 0 ? _c : null;
        this.followScript = (_d = options === null || options === void 0 ? void 0 : options.followScript) !== null && _d !== void 0 ? _d : null;
        this.unfollowScript = (_e = options === null || options === void 0 ? void 0 : options.unfollowScript) !== null && _e !== void 0 ? _e : null;
        this.sendRequestScript = (_f = options === null || options === void 0 ? void 0 : options.sendRequestScript) !== null && _f !== void 0 ? _f : null;
        this.cancelRequestScript = (_g = options === null || options === void 0 ? void 0 : options.cancelRequestScript) !== null && _g !== void 0 ? _g : null;
        this.acceptRequestScript = (_h = options === null || options === void 0 ? void 0 : options.acceptRequestScript) !== null && _h !== void 0 ? _h : null;
        this.rejectRequestScript = (_j = options === null || options === void 0 ? void 0 : options.rejectRequestScript) !== null && _j !== void 0 ? _j : null;
        this.deleteFriendScript = (_k = options === null || options === void 0 ? void 0 : options.deleteFriendScript) !== null && _k !== void 0 ? _k : null;
        this.updateProfileScript = (_l = options === null || options === void 0 ? void 0 : options.updateProfileScript) !== null && _l !== void 0 ? _l : null;
        this.followNotification = (_m = options === null || options === void 0 ? void 0 : options.followNotification) !== null && _m !== void 0 ? _m : null;
        this.receiveRequestNotification = (_o = options === null || options === void 0 ? void 0 : options.receiveRequestNotification) !== null && _o !== void 0 ? _o : null;
        this.cancelRequestNotification = (_p = options === null || options === void 0 ? void 0 : options.cancelRequestNotification) !== null && _p !== void 0 ? _p : null;
        this.acceptRequestNotification = (_q = options === null || options === void 0 ? void 0 : options.acceptRequestNotification) !== null && _q !== void 0 ? _q : null;
        this.rejectRequestNotification = (_r = options === null || options === void 0 ? void 0 : options.rejectRequestNotification) !== null && _r !== void 0 ? _r : null;
        this.deleteFriendNotification = (_s = options === null || options === void 0 ? void 0 : options.deleteFriendNotification) !== null && _s !== void 0 ? _s : null;
        this.logSetting = (_t = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _t !== void 0 ? _t : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Friend::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
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
        if (this.followScript != null) {
            properties["FollowScript"] = (_c = this.followScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.unfollowScript != null) {
            properties["UnfollowScript"] = (_d = this.unfollowScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.sendRequestScript != null) {
            properties["SendRequestScript"] = (_e = this.sendRequestScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.cancelRequestScript != null) {
            properties["CancelRequestScript"] = (_f = this.cancelRequestScript) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.acceptRequestScript != null) {
            properties["AcceptRequestScript"] = (_g = this.acceptRequestScript) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.rejectRequestScript != null) {
            properties["RejectRequestScript"] = (_h = this.rejectRequestScript) === null || _h === void 0 ? void 0 : _h.properties();
        }
        if (this.deleteFriendScript != null) {
            properties["DeleteFriendScript"] = (_j = this.deleteFriendScript) === null || _j === void 0 ? void 0 : _j.properties();
        }
        if (this.updateProfileScript != null) {
            properties["UpdateProfileScript"] = (_k = this.updateProfileScript) === null || _k === void 0 ? void 0 : _k.properties();
        }
        if (this.followNotification != null) {
            properties["FollowNotification"] = (_l = this.followNotification) === null || _l === void 0 ? void 0 : _l.properties();
        }
        if (this.receiveRequestNotification != null) {
            properties["ReceiveRequestNotification"] = (_m = this.receiveRequestNotification) === null || _m === void 0 ? void 0 : _m.properties();
        }
        if (this.cancelRequestNotification != null) {
            properties["CancelRequestNotification"] = (_o = this.cancelRequestNotification) === null || _o === void 0 ? void 0 : _o.properties();
        }
        if (this.acceptRequestNotification != null) {
            properties["AcceptRequestNotification"] = (_p = this.acceptRequestNotification) === null || _p === void 0 ? void 0 : _p.properties();
        }
        if (this.rejectRequestNotification != null) {
            properties["RejectRequestNotification"] = (_q = this.rejectRequestNotification) === null || _q === void 0 ? void 0 : _q.properties();
        }
        if (this.deleteFriendNotification != null) {
            properties["DeleteFriendNotification"] = (_r = this.deleteFriendNotification) === null || _r === void 0 ? void 0 : _r.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_s = this.logSetting) === null || _s === void 0 ? void 0 : _s.properties();
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