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
const model_1 = require("../../core/model");
class SendMessageByUserId extends model_1.AcquireAction {
    constructor(namespaceName, metadata, readAcquireActions = null, expiresAt = null, expiresTimeSpan = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.readAcquireActions = null;
        this.expiresAt = null;
        this.expiresTimeSpan = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.metadata = metadata;
        this.readAcquireActions = readAcquireActions !== null && readAcquireActions !== void 0 ? readAcquireActions : null;
        this.expiresAt = expiresAt !== null && expiresAt !== void 0 ? expiresAt : null;
        this.expiresTimeSpan = expiresTimeSpan !== null && expiresTimeSpan !== void 0 ? expiresTimeSpan : null;
        this.timeOffsetToken = timeOffsetToken !== null && timeOffsetToken !== void 0 ? timeOffsetToken : null;
        this.userId = userId;
    }
    request() {
        var _a;
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.readAcquireActions != null) {
            properties["readAcquireActions"] = this.readAcquireActions.map(v => v.properties());
        }
        if (this.expiresAt != null) {
            properties["expiresAt"] = this.expiresAt;
        }
        if (this.expiresTimeSpan != null) {
            properties["expiresTimeSpan"] = (_a = this.expiresTimeSpan) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2Inbox:SendMessageByUserId";
    }
}
exports.default = SendMessageByUserId;
//# sourceMappingURL=SendMessageByUserId.js.map