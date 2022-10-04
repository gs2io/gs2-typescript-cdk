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
const CampaignModelRef_1 = tslib_1.__importDefault(require("../ref/CampaignModelRef"));
class CampaignModel {
    constructor(name, enableCampaignCode, options) {
        var _a;
        this.metadata = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.enableCampaignCode = enableCampaignCode;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.enableCampaignCode != null) {
            properties["EnableCampaignCode"] = this.enableCampaignCode;
        }
        return properties;
    }
    ref(namespaceName) {
        return new CampaignModelRef_1.default(namespaceName, this.name);
    }
}
exports.default = CampaignModel;
//# sourceMappingURL=CampaignModel.js.map