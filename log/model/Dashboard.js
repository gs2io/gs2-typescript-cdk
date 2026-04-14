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
const tslib_1 = require("tslib");
const model_1 = require("../../core/model");
const func_1 = require("../../core/func");
const DashboardRef_1 = tslib_1.__importDefault(require("../ref/DashboardRef"));
class Dashboard extends model_1.CdkResource {
    constructor(stack, namespaceName, displayName, options = null) {
        var _a;
        super("Log_Dashboard_" + displayName);
        this.description = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.displayName = displayName;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        stack.addResource(this);
    }
    alternateKeys() {
        return "name";
    }
    resourceType() {
        return "GS2::Log::Dashboard";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.displayName != null) {
            properties["DisplayName"] = this.displayName;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        return properties;
    }
    ref(name) {
        return new DashboardRef_1.default(this.namespaceName, name);
    }
    getAttrDashboardId() {
        return new func_1.GetAttr(this, "Item.DashboardId", null);
    }
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map