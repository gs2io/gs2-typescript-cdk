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
import { RatingVerifyType } from "./enums/RatingVerifyType";

export default class VerifyRatingByUserId extends VerifyAction {
    private readonly namespaceName: string;
    private readonly userId: string;
    private readonly ratingName: string;
    private readonly verifyType: RatingVerifyType;
    private readonly rateValue: number;
    private readonly timeOffsetToken: string|null = null;


    public constructor(
        namespaceName: string,
        ratingName: string,
        verifyType: RatingVerifyType,
        rateValue: number,
        timeOffsetToken: string|null = null,
        userId: string = "#{userId}",
    ) {
        super();

        this.namespaceName = namespaceName;
        this.ratingName = ratingName;
        this.verifyType = verifyType;
        this.rateValue = rateValue;
        this.timeOffsetToken = timeOffsetToken ?? null;
        this.userId = userId;
    }

    public request(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["namespaceName"] = this.namespaceName;
        }
        if (this.userId != null) {
            properties["userId"] = this.userId;
        }
        if (this.ratingName != null) {
            properties["ratingName"] = this.ratingName;
        }
        if (this.verifyType != null) {
            properties["verifyType"] = this.verifyType;
        }
        if (this.rateValue != null) {
            properties["rateValue"] = this.rateValue;
        }
        if (this.timeOffsetToken != null) {
            properties["timeOffsetToken"] = this.timeOffsetToken;
        }

        return properties;
    }

    public action(): string {
        return "Gs2Matchmaking:VerifyRatingByUserId";
    }
}
