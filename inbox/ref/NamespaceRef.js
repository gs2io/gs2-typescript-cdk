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
const func_1 = require("../../core/func");
const GlobalMessageRef_1 = tslib_1.__importDefault(require("./GlobalMessageRef"));
const SendMessageByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SendMessageByUserId"));
const OpenMessageByUserId_1 = tslib_1.__importDefault(require("../stampSheet/OpenMessageByUserId"));
const DeleteMessageByUserId_1 = tslib_1.__importDefault(require("../stampSheet/DeleteMessageByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    globalMessage(globalMessageName) {
        return new GlobalMessageRef_1.default(this.namespaceName, globalMessageName);
    }
    sendMessage(metadata, readAcquireActions = null, expiresAt = null, expiresTimeSpan = null, userId = "#{userId}") {
        return new SendMessageByUserId_1.default(this.namespaceName, metadata, readAcquireActions, expiresAt, expiresTimeSpan, userId);
    }
    openMessage(messageName = null, userId = "#{userId}") {
        return new OpenMessageByUserId_1.default(this.namespaceName, messageName, userId);
    }
    deleteMessage(messageName = null, userId = "#{userId}") {
        return new DeleteMessageByUserId_1.default(this.namespaceName, messageName, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "inbox",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map