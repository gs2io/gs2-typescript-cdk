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
class IssueStampSheetLog {
    constructor(timestamp, transactionId, service, method, userId, action, args, options) {
        var _a;
        this.tasks = null;
        this.timestamp = timestamp;
        this.transactionId = transactionId;
        this.service = service;
        this.method = method;
        this.userId = userId;
        this.action = action;
        this.args = args;
        this.tasks = (_a = options === null || options === void 0 ? void 0 : options.tasks) !== null && _a !== void 0 ? _a : null;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["Timestamp"] = this.timestamp;
        }
        if (this.transactionId != null) {
            properties["TransactionId"] = this.transactionId;
        }
        if (this.service != null) {
            properties["Service"] = this.service;
        }
        if (this.method != null) {
            properties["Method"] = this.method;
        }
        if (this.userId != null) {
            properties["UserId"] = this.userId;
        }
        if (this.action != null) {
            properties["Action"] = this.action;
        }
        if (this.args != null) {
            properties["Args"] = this.args;
        }
        if (this.tasks != null) {
            properties["Tasks"] = this.tasks;
        }
        return properties;
    }
}
exports.default = IssueStampSheetLog;
//# sourceMappingURL=IssueStampSheetLog.js.map