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
const RoomRef_1 = tslib_1.__importDefault(require("../ref/RoomRef"));
class Room extends model_1.CdkResource {
    constructor(stack, ownerId, namespaceName, name, options = null) {
        var _a, _b, _c;
        super("Realtime_Room_" + name);
        this.ipAddress = null;
        this.port = null;
        this.encryptionKey = null;
        this.stack = stack;
        this.ownerId = ownerId;
        this.namespaceName = namespaceName;
        this.name = name;
        this.ipAddress = (_a = options === null || options === void 0 ? void 0 : options.ipAddress) !== null && _a !== void 0 ? _a : null;
        this.port = (_b = options === null || options === void 0 ? void 0 : options.port) !== null && _b !== void 0 ? _b : null;
        this.encryptionKey = (_c = options === null || options === void 0 ? void 0 : options.encryptionKey) !== null && _c !== void 0 ? _c : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Realtime::Room";
    }
    properties() {
        let properties = {};
        if (this.ownerId != null) {
            properties["OwnerId"] = this.ownerId;
        }
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.ipAddress != null) {
            properties["IpAddress"] = this.ipAddress;
        }
        if (this.port != null) {
            properties["Port"] = this.port;
        }
        if (this.encryptionKey != null) {
            properties["EncryptionKey"] = this.encryptionKey;
        }
        return properties;
    }
    ref() {
        return new RoomRef_1.default(this.namespaceName, this.name);
    }
    getAttrRoomId() {
        return new func_1.GetAttr(this, "Item.RoomId", null);
    }
}
exports.default = Room;
//# sourceMappingURL=Room.js.map