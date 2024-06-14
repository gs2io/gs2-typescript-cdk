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

import {GetAttr, Join} from "../../core/func";
import RatingModelRef from "./RatingModelRef";
import SeasonModelRef from "./SeasonModelRef";
import VerifyIncludeParticipantByUserId from "../stampSheet/VerifyIncludeParticipantByUserId";
import { SeasonGatheringVerifyType } from "../stampSheet/enum/SeasonGatheringVerifyType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public ratingModel(
        ratingName: string,
    ): RatingModelRef {
        return new RatingModelRef(
            this.namespaceName,
            ratingName,
        );
    }

    public seasonModel(
        seasonName: string,
    ): SeasonModelRef {
        return new SeasonModelRef(
            this.namespaceName,
            seasonName,
        );
    }

    public verifyIncludeParticipant(
        seasonName: string,
        season: number,
        tier: number,
        verifyType: SeasonGatheringVerifyType,
        seasonGatheringName: string|null = null,
        userId: string = "#{userId}",
    ): VerifyIncludeParticipantByUserId {
        return new VerifyIncludeParticipantByUserId(
            this.namespaceName,
            seasonName,
            season,
            tier,
            verifyType,
            seasonGatheringName,
            userId,
        );
    }

    public grn(
    ): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region(
                ).str(
                ),
                GetAttr.ownerId(
                ).str(
                ),
                "matchmaking",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
