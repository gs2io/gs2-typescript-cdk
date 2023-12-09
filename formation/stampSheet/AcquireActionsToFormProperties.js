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
class AcquireActionsToFormProperties extends model_1.AcquireAction {
    constructor(namespaceName, moldModelName, index, acquireAction, config = null, userId = "#{userId}") {
        super();
        this.config = null;
        this.namespaceName = namespaceName;
        this.moldModelName = moldModelName;
        this.index = index;
        this.acquireAction = acquireAction;
        this.config = config !== null && config !== void 0 ? config : null;
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
        if (this.moldModelName != null) {
            properties["moldModelName"] = this.moldModelName;
        }
        if (this.index != null) {
            properties["index"] = this.index;
        }
        if (this.acquireAction != null) {
            properties["acquireAction"] = (_a = this.acquireAction) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.config != null) {
            properties["config"] = this.config.map(v => v.properties());
        }
        return properties;
    }
    action() {
        return "Gs2Formation:AcquireActionsToFormProperties";
    }
}
exports.default = AcquireActionsToFormProperties;
//# sourceMappingURL=AcquireActionsToFormProperties.js.map