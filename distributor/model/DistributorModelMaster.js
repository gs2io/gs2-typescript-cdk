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
const DistributorModelMasterRef_1 = tslib_1.__importDefault(require("../ref/DistributorModelMasterRef"));
class DistributorModelMaster extends core_1.default.CdkResource {
    constructor(stack, namespaceName, name, options) {
        var _a, _b, _c, _d;
        super("Distributor_DistributorModelMaster_" + name);
        this.description = null;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = (_a = options === null || options === void 0 ? void 0 : options.description) !== null && _a !== void 0 ? _a : null;
        this.metadata = (_b = options === null || options === void 0 ? void 0 : options.metadata) !== null && _b !== void 0 ? _b : null;
        this.inboxNamespaceId = (_c = options === null || options === void 0 ? void 0 : options.inboxNamespaceId) !== null && _c !== void 0 ? _c : null;
        this.whiteListTargetIds = (_d = options === null || options === void 0 ? void 0 : options.whiteListTargetIds) !== null && _d !== void 0 ? _d : null;
        stack.addResource(this);
    }
    resourceType() {
        return "GS2::Distributor::DistributorModelMaster";
    }
    properties() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.inboxNamespaceId != null) {
            properties["InboxNamespaceId"] = this.inboxNamespaceId;
        }
        if (this.whiteListTargetIds != null) {
            properties["WhiteListTargetIds"] = this.whiteListTargetIds;
        }
        return properties;
    }
    ref(namespaceName) {
        return new DistributorModelMasterRef_1.default(namespaceName, this.name);
    }
    getAttrDistributorModelId() {
        return new func_1.GetAttr(null, null, "Item.DistributorModelId");
    }
}
exports.default = DistributorModelMaster;
//# sourceMappingURL=DistributorModelMaster.js.map