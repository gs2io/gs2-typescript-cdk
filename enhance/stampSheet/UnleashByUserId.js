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
class UnleashByUserId extends model_1.AcquireAction {
    constructor(namespaceName, rateName, targetItemSetId, materials, config = null, userId = "#{userId}") {
        super();
        this.config = null;
        this.namespaceName = namespaceName;
        this.rateName = rateName;
        this.targetItemSetId = targetItemSetId;
        this.materials = materials;
        this.config = config !== null && config !== void 0 ? config : null;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.rateName != null) {
            properties["rateName"] = this.rateName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.targetItemSetId != null) {
            properties["targetItemSetId"] = this.targetItemSetId;
        }
        if (this.materials != null) {
            properties["materials"] = this.materials;
        }
        if (this.config != null) {
            properties["config"] = this.config.map(v => v.properties());
        }
        return properties;
    }
    action() {
        return "Gs2Enhance:UnleashByUserId";
    }
}
exports.default = UnleashByUserId;
//# sourceMappingURL=UnleashByUserId.js.map