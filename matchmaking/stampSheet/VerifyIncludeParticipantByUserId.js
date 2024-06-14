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
class VerifyIncludeParticipantByUserId extends model_1.ConsumeAction {
    constructor(namespaceName, seasonName, season, tier, verifyType, seasonGatheringName = null, timeOffsetToken = null, userId = "#{userId}") {
        super();
        this.seasonGatheringName = null;
        this.timeOffsetToken = null;
        this.namespaceName = namespaceName;
        this.seasonName = seasonName;
        this.season = season;
        this.tier = tier;
        this.verifyType = verifyType;
        this.seasonGatheringName = seasonGatheringName !== null && seasonGatheringName !== void 0 ? seasonGatheringName : null;
        this.timeOffsetToken = timeOffsetToken !== null && timeOffsetToken !== void 0 ? timeOffsetToken : null;
        this.userId = userId;
    }
    request() {
        let properties = {};
        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.seasonName != null) {
            properties["seasonName"] = this.seasonName;
        }
        if (this.season != null) {
            properties["season"] = this.season;
        }
        if (this.tier != null) {
            properties["tier"] = this.tier;
        }
        if (this.seasonGatheringName != null) {
            properties["seasonGatheringName"] = this.seasonGatheringName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }
        return properties;
    }
    action() {
        return "Gs2Matchmaking:VerifyIncludeParticipantByUserId";
    }
}
exports.default = VerifyIncludeParticipantByUserId;
//# sourceMappingURL=VerifyIncludeParticipantByUserId.js.map