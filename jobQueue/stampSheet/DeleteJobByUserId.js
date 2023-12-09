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
class DeleteJobByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, jobName = null, userId = "#{userId}") {
        super();
        this.jobName = null;
        this.namespaceName = namespaceName;
        this.jobName = jobName !== null && jobName !== void 0 ? jobName : null;
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
        return properties;
    }
    action() {
        return "Gs2JobQueue:DeleteJobByUserId";
    }
}
exports.default = DeleteJobByUserId;
//# sourceMappingURL=DeleteJobByUserId.js.map