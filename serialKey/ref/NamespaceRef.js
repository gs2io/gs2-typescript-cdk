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
const func_1 = require("../../core/func");
const CurrentCampaignMasterRef_1 = tslib_1.__importDefault(require("./CurrentCampaignMasterRef"));
const CampaignModelRef_1 = tslib_1.__importDefault(require("./CampaignModelRef"));
const SerialKeyRef_1 = tslib_1.__importDefault(require("./SerialKeyRef"));
const CampaignModelMasterRef_1 = tslib_1.__importDefault(require("./CampaignModelMasterRef"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    currentCampaignMaster() {
        return new CurrentCampaignMasterRef_1.default(this.namespaceName);
    }
    campaignModel(campaignModelName) {
        return new CampaignModelRef_1.default(this.namespaceName, campaignModelName);
    }
    serialKey(serialKeyCode) {
        return new SerialKeyRef_1.default(this.namespaceName, serialKeyCode);
    }
    campaignModelMaster(campaignModelName) {
        return new CampaignModelMasterRef_1.default(this.namespaceName, campaignModelName);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "serialKey",
            this.namespaceName
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map