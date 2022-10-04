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
class ExecuteStampTaskLogCount {
    constructor(count, options) {
        var _a, _b, _c, _d;
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.service = (_a = options === null || options === void 0 ? void 0 : options.service) !== null && _a !== void 0 ? _a : null;
        this.method = (_b = options === null || options === void 0 ? void 0 : options.method) !== null && _b !== void 0 ? _b : null;
        this.userId = (_c = options === null || options === void 0 ? void 0 : options.userId) !== null && _c !== void 0 ? _c : null;
        this.action = (_d = options === null || options === void 0 ? void 0 : options.action) !== null && _d !== void 0 ? _d : null;
        this.count = count;
    }
    properties() {
        let properties = {};
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
        if (this.count != null) {
            properties["Count"] = this.count;
        }
        return properties;
    }
}
exports.default = ExecuteStampTaskLogCount;
//# sourceMappingURL=ExecuteStampTaskLogCount.js.map