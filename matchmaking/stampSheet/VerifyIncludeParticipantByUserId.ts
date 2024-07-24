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

import {AcquireAction, ConsumeAction, VerifyAction} from "../../core/model";
import { SeasonGatheringVerifyType } from "./enum/SeasonGatheringVerifyType";

export default class VerifyIncludeParticipantByUserId extends VerifyAction {
    private readonly namespaceName: string;
    private readonly seasonName: string;
    private readonly season: number;
    private readonly tier: number;
    private readonly userId: string;
    private readonly verifyType: SeasonGatheringVerifyType;
    private readonly seasonGatheringName: string|null = null;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        seasonName: string,
        season: number,
        tier: number,
        verifyType: SeasonGatheringVerifyType,
        seasonGatheringName: string|null = null,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.seasonName = seasonName;
        this.season = season;
        this.tier = tier;
        this.verifyType = verifyType;
        this.seasonGatheringName = seasonGatheringName ?? null;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

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

    public action(): string {
        return "Gs2Matchmaking:VerifyIncludeParticipantByUserId";
    }
}
