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
const ExperienceModelRef_1 = tslib_1.__importDefault(require("./ExperienceModelRef"));
const AddExperienceByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddExperienceByUserId"));
const AddRankCapByUserId_1 = tslib_1.__importDefault(require("../stampSheet/AddRankCapByUserId"));
const SetRankCapByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SetRankCapByUserId"));
const MultiplyAcquireActionsByUserId_1 = tslib_1.__importDefault(require("../stampSheet/MultiplyAcquireActionsByUserId"));
const SubExperienceByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SubExperienceByUserId"));
const SubRankCapByUserId_1 = tslib_1.__importDefault(require("../stampSheet/SubRankCapByUserId"));
const VerifyRankByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyRankByUserId"));
const VerifyRankCapByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyRankCapByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    experienceModel(experienceName) {
        return new ExperienceModelRef_1.default(this.namespaceName, experienceName);
    }
    addExperience(experienceName, propertyId, experienceValue = null, userId = "#{userId}") {
        return new AddExperienceByUserId_1.default(this.namespaceName, experienceName, propertyId, experienceValue, userId);
    }
    addRankCap(experienceName, propertyId, rankCapValue, userId = "#{userId}") {
        return new AddRankCapByUserId_1.default(this.namespaceName, experienceName, propertyId, rankCapValue, userId);
    }
    setRankCap(experienceName, propertyId, rankCapValue, userId = "#{userId}") {
        return new SetRankCapByUserId_1.default(this.namespaceName, experienceName, propertyId, rankCapValue, userId);
    }
    multiplyAcquireActions(experienceName, propertyId, rateName, acquireActions = null, userId = "#{userId}") {
        return new MultiplyAcquireActionsByUserId_1.default(this.namespaceName, experienceName, propertyId, rateName, acquireActions, userId);
    }
    subExperience(experienceName, propertyId, experienceValue = null, userId = "#{userId}") {
        return new SubExperienceByUserId_1.default(this.namespaceName, experienceName, propertyId, experienceValue, userId);
    }
    subRankCap(experienceName, propertyId, rankCapValue, userId = "#{userId}") {
        return new SubRankCapByUserId_1.default(this.namespaceName, experienceName, propertyId, rankCapValue, userId);
    }
    verifyRank(experienceName, verifyType, propertyId, rankValue = null, userId = "#{userId}") {
        return new VerifyRankByUserId_1.default(this.namespaceName, experienceName, verifyType, propertyId, rankValue, userId);
    }
    verifyRankCap(experienceName, verifyType, propertyId, rankCapValue, userId = "#{userId}") {
        return new VerifyRankCapByUserId_1.default(this.namespaceName, experienceName, verifyType, propertyId, rankCapValue, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "experience",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map