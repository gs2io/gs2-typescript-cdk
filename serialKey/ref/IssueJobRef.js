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
const func_1 = require("../../core/func");
class IssueJobRef {
    constructor(namespaceName, campaignModelName, issueJobName) {
        this.namespaceName = namespaceName;
        this.campaignModelName = campaignModelName;
        this.issueJobName = issueJobName;
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "serialKey",
            this.namespaceName,
            "master",
            "campaign",
            this.campaignModelName,
            "issue",
            "job",
            this.issueJobName
        ]).str();
    }
}
exports.default = IssueJobRef;
//# sourceMappingURL=IssueJobRef.js.map