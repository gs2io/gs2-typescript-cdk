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
const tslib_1 = require("tslib");
const func_1 = require("../../core/func");
const CampaignModelRef_1 = tslib_1.__importDefault(require("./CampaignModelRef"));
const RevertUseByUserId_1 = tslib_1.__importDefault(require("../stampSheet/RevertUseByUserId"));
const IssueOnce_1 = tslib_1.__importDefault(require("../stampSheet/IssueOnce"));
const UseByUserId_1 = tslib_1.__importDefault(require("../stampSheet/UseByUserId"));
const VerifyCodeByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyCodeByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    campaignModel(campaignModelName) {
        return new CampaignModelRef_1.default(this.namespaceName, campaignModelName);
    }
    revertUse(code, userId = "#{userId}") {
        return new RevertUseByUserId_1.default(this.namespaceName, code, userId);
    }
    issueOnce(campaignModelName, metadata = null) {
        return new IssueOnce_1.default(this.namespaceName, campaignModelName, metadata);
    }
    use(code, userId = "#{userId}") {
        return new UseByUserId_1.default(this.namespaceName, code, userId);
    }
    verifyCode(code, verifyType, campaignModelName = null, userId = "#{userId}") {
        return new VerifyCodeByUserId_1.default(this.namespaceName, code, verifyType, campaignModelName, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "serialKey",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map