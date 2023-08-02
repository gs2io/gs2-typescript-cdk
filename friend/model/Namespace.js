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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        super("Friend_Namespace_" + name);
        this.description = null;
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
        this.acceptRequestNotification = null;
        this.logSetting = null;
        this.stack = stack;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.followScript = (_b = options === null || options === void 0 ? void 0 : options.followScript) !== null && _b !== void 0 ? _b : null;
        this.unfollowScript = (_c = options === null || options === void 0 ? void 0 : options.unfollowScript) !== null && _c !== void 0 ? _c : null;
        this.sendRequestScript = (_d = options === null || options === void 0 ? void 0 : options.sendRequestScript) !== null && _d !== void 0 ? _d : null;
        this.cancelRequestScript = (_e = options === null || options === void 0 ? void 0 : options.cancelRequestScript) !== null && _e !== void 0 ? _e : null;
        this.acceptRequestScript = (_f = options === null || options === void 0 ? void 0 : options.acceptRequestScript) !== null && _f !== void 0 ? _f : null;
        this.rejectRequestScript = (_g = options === null || options === void 0 ? void 0 : options.rejectRequestScript) !== null && _g !== void 0 ? _g : null;
        this.deleteFriendScript = (_h = options === null || options === void 0 ? void 0 : options.deleteFriendScript) !== null && _h !== void 0 ? _h : null;
        this.updateProfileScript = (_j = options === null || options === void 0 ? void 0 : options.updateProfileScript) !== null && _j !== void 0 ? _j : null;
        this.followNotification = (_k = options === null || options === void 0 ? void 0 : options.followNotification) !== null && _k !== void 0 ? _k : null;
        this.receiveRequestNotification = (_l = options === null || options === void 0 ? void 0 : options.receiveRequestNotification) !== null && _l !== void 0 ? _l : null;
        this.acceptRequestNotification = (_m = options === null || options === void 0 ? void 0 : options.acceptRequestNotification) !== null && _m !== void 0 ? _m : null;
        this.logSetting = (_o = options === null || options === void 0 ? void 0 : options.logSetting) !== null && _o !== void 0 ? _o : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Friend::Namespace";
    }
    properties() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.followScript != null) {
            properties["FollowScript"] = (_a = this.followScript) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.unfollowScript != null) {
            properties["UnfollowScript"] = (_b = this.unfollowScript) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.sendRequestScript != null) {
            properties["SendRequestScript"] = (_c = this.sendRequestScript) === null || _c === void 0 ? void 0 : _c.properties();
        }
        if (this.cancelRequestScript != null) {
            properties["CancelRequestScript"] = (_d = this.cancelRequestScript) === null || _d === void 0 ? void 0 : _d.properties();
        }
        if (this.acceptRequestScript != null) {
            properties["AcceptRequestScript"] = (_e = this.acceptRequestScript) === null || _e === void 0 ? void 0 : _e.properties();
        }
        if (this.rejectRequestScript != null) {
            properties["RejectRequestScript"] = (_f = this.rejectRequestScript) === null || _f === void 0 ? void 0 : _f.properties();
        }
        if (this.deleteFriendScript != null) {
            properties["DeleteFriendScript"] = (_g = this.deleteFriendScript) === null || _g === void 0 ? void 0 : _g.properties();
        }
        if (this.updateProfileScript != null) {
            properties["UpdateProfileScript"] = (_h = this.updateProfileScript) === null || _h === void 0 ? void 0 : _h.properties();
        }
        if (this.followNotification != null) {
            properties["FollowNotification"] = (_j = this.followNotification) === null || _j === void 0 ? void 0 : _j.properties();
        }
        if (this.receiveRequestNotification != null) {
            properties["ReceiveRequestNotification"] = (_k = this.receiveRequestNotification) === null || _k === void 0 ? void 0 : _k.properties();
        }
        if (this.acceptRequestNotification != null) {
            properties["AcceptRequestNotification"] = (_l = this.acceptRequestNotification) === null || _l === void 0 ? void 0 : _l.properties();
        }
        if (this.logSetting != null) {
            properties["LogSetting"] = (_m = this.logSetting) === null || _m === void 0 ? void 0 : _m.properties();
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