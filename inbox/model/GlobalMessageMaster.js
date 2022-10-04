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
const tslib_1 = require("tslib");
const core_1 = tslib_1.__importDefault(require("../../core"));
const func_1 = require("../../core/func");
const GlobalMessageMasterRef_1 = tslib_1.__importDefault(require("../ref/GlobalMessageMasterRef"));
class GlobalMessageMaster extends core_1.default.CdkResource {
    constructor(stack, namespaceName, name, metadata, options) {
        var _a, _b, _c;
        super("Inbox_GlobalMessageMaster_" + name);
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.expiresAt = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.metadata = metadata;
        this.readAcquireActions = (_a = options === null || options === void 0 ? void 0 : options.readAcquireActions) !== null && _a !== void 0 ? _a : null;
        this.expiresTimeSpan = (_b = options === null || options === void 0 ? void 0 : options.expiresTimeSpan) !== null && _b !== void 0 ? _b : null;
        this.expiresAt = (_c = options === null || options === void 0 ? void 0 : options.expiresAt) !== null && _c !== void 0 ? _c : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Inbox::GlobalMessageMaster";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.readAcquireActions != null) {
            properties["ReadAcquireActions"] = this.readAcquireActions.map(v => v.properties());
        }
        if (this.expiresTimeSpan != null) {
            properties["ExpiresTimeSpan"] = this.expiresTimeSpan.properties();
        }
        if (this.expiresAt != null) {
            properties["ExpiresAt"] = this.expiresAt;
        }
        return properties;
    }
    ref(namespaceName) {
        return new GlobalMessageMasterRef_1.default(namespaceName, this.name);
    }
    getAttrGlobalMessageId() {
        return new func_1.GetAttr(null, null, "Item.GlobalMessageId");
    }
}
exports.default = GlobalMessageMaster;
//# sourceMappingURL=GlobalMessageMaster.js.map