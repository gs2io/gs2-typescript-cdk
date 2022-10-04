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
const DistributorModelRef_1 = tslib_1.__importDefault(require("../ref/DistributorModelRef"));
class DistributorModel {
    constructor(name, options) {
        var _a, _b, _c;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.inboxNamespaceId = (_b = options === null || options === void 0 ? void 0 : options.inboxNamespaceId) !== null && _b !== void 0 ? _b : null;
        this.whiteListTargetIds = (_c = options === null || options === void 0 ? void 0 : options.whiteListTargetIds) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
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
        return new DistributorModelRef_1.default(namespaceName, this.name);
    }
}
exports.default = DistributorModel;
//# sourceMappingURL=DistributorModel.js.map