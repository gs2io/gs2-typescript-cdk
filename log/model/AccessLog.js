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
class AccessLog {
    constructor(timestamp, requestId, service, method, request, result, options) {
        var _a;
        this.userId = null;
        this.timestamp = timestamp;
        this.requestId = requestId;
        this.service = service;
        this.method = method;
        this.userId = (_a = options === null || options === void 0 ? void 0 : options.userId) !== null && _a !== void 0 ? _a : null;
        this.request = request;
        this.result = result;
    }
    properties() {
        let properties = {};
        if (this.timestamp != null) {
            properties["Timestamp"] = this.timestamp;
        }
        if (this.requestId != null) {
            properties["RequestId"] = this.requestId;
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
        if (this.request != null) {
            properties["Request"] = this.request;
        }
        if (this.result != null) {
            properties["Result"] = this.result;
        }
        return properties;
    }
}
exports.default = AccessLog;
//# sourceMappingURL=AccessLog.js.map