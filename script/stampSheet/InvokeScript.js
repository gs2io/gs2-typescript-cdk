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
 *
 * deny overwrite
 */
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../core/model");
class InvokeScript extends model_1.AcquireAction {
    constructor(scriptId = null, args = null, randomStatus = null, forceUseDistributor = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.scriptId = null;
        this.userId = null;
        this.args = null;
        this.randomStatus = null;
        this.forceUseDistributor = null;
        this.timeOffsetToken = null;
        this.scriptId = scriptId !== null && scriptId !== void 0 ? scriptId : null;
        this.args = args !== null && args !== void 0 ? args : null;
        this.randomStatus = randomStatus !== null && randomStatus !== void 0 ? randomStatus : null;
        this.forceUseDistributor = forceUseDistributor !== null && forceUseDistributor !== void 0 ? forceUseDistributor : null;
        this.timeOffsetToken = timeOffsetToken !== null && timeOffsetToken !== void 0 ? timeOffsetToken : null;
        this.userId = userId;
    }
    request() {
        var _a;
        let properties = {};
        if (this.scriptId != null) {
            properties["scriptId"] = this.scriptId;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.args != null) {
            properties["args"] = this.args;
        }
        if (this.randomStatus != null) {
            properties["randomStatus"] = (_a = this.randomStatus) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.forceUseDistributor != null) {
            properties["forceUseDistributor"] = this.forceUseDistributor;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2Script:InvokeScript";
    }
}
exports.default = InvokeScript;
//# sourceMappingURL=InvokeScript.js.map