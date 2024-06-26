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
const RatingModelRef_1 = tslib_1.__importDefault(require("./RatingModelRef"));
const SeasonModelRef_1 = tslib_1.__importDefault(require("./SeasonModelRef"));
const VerifyIncludeParticipantByUserId_1 = tslib_1.__importDefault(require("../stampSheet/VerifyIncludeParticipantByUserId"));
class NamespaceRef {
    constructor(namespaceName) {
        this.namespaceName = namespaceName;
    }
    ratingModel(ratingName) {
        return new RatingModelRef_1.default(this.namespaceName, ratingName);
    }
    seasonModel(seasonName) {
        return new SeasonModelRef_1.default(this.namespaceName, seasonName);
    }
    verifyIncludeParticipant(seasonName, season, tier, verifyType, seasonGatheringName = null, userId = "#{userId}") {
        return new VerifyIncludeParticipantByUserId_1.default(this.namespaceName, seasonName, season, tier, verifyType, seasonGatheringName, userId);
    }
    grn() {
        return new func_1.Join(":", [
            "grn",
            "gs2",
            func_1.GetAttr.region().str(),
            func_1.GetAttr.ownerId().str(),
            "matchmaking",
            this.namespaceName,
        ]).str();
    }
}
exports.default = NamespaceRef;
//# sourceMappingURL=NamespaceRef.js.map