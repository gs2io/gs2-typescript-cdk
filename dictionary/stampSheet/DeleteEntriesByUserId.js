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
class DeleteEntriesByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, entryModelNames = null, userId = "#{userId}") {
        super();
        this.entryModelNames = null;
        this.namespaceName = namespaceName;
        this.entryModelNames = entryModelNames !== null && entryModelNames !== void 0 ? entryModelNames : null;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.entryModelNames != null) {
            properties["entryModelNames"] = this.entryModelNames;
        }
        return properties;
    }
    action() {
        return "Gs2Dictionary:DeleteEntriesByUserId";
    }
}
exports.default = DeleteEntriesByUserId;
//# sourceMappingURL=DeleteEntriesByUserId.js.map