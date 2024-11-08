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
import ExperienceModelRef from "./ExperienceModelRef";
import AddExperienceByUserId from "../stampSheet/AddExperienceByUserId";
import SetExperienceByUserId from "../stampSheet/SetExperienceByUserId";
import AddRankCapByUserId from "../stampSheet/AddRankCapByUserId";
import SetRankCapByUserId from "../stampSheet/SetRankCapByUserId";
import MultiplyAcquireActionsByUserId from "../stampSheet/MultiplyAcquireActionsByUserId";
import { AcquireAction } from "../../core/model";
import SubExperienceByUserId from "../stampSheet/SubExperienceByUserId";
import SubRankCapByUserId from "../stampSheet/SubRankCapByUserId";
import VerifyRankByUserId from "../stampSheet/VerifyRankByUserId";
import { StatusVerifyType } from "../stampSheet/enum/StatusVerifyType";
import VerifyRankCapByUserId from "../stampSheet/VerifyRankCapByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public experienceModel(
        experienceName: string,
    ): ExperienceModelRef {
        return new ExperienceModelRef(
            this.namespaceName,
            experienceName,
        );
    }

    public addExperience(
        experienceName: string,
        propertyId: string,
        experienceValue: number|null = null,
        truncateExperienceWhenRankUp: boolean|null = null,
        userId: string = "#{userId}",
    ): AddExperienceByUserId {
        return new AddExperienceByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            experienceValue,
            truncateExperienceWhenRankUp,
            userId,
        );
    }

    public setExperience(
        experienceName: string,
        propertyId: string,
        experienceValue: number|null = null,
        userId: string = "#{userId}",
    ): SetExperienceByUserId {
        return new SetExperienceByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            experienceValue,
            userId,
        );
    }

    public addRankCap(
        experienceName: string,
        propertyId: string,
        rankCapValue: number,
        userId: string = "#{userId}",
    ): AddRankCapByUserId {
        return new AddRankCapByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            rankCapValue,
            userId,
        );
    }

    public setRankCap(
        experienceName: string,
        propertyId: string,
        rankCapValue: number,
        userId: string = "#{userId}",
    ): SetRankCapByUserId {
        return new SetRankCapByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            rankCapValue,
            userId,
        );
    }

    public multiplyAcquireActions(
        experienceName: string,
        propertyId: string,
        rateName: string,
        acquireActions: AcquireAction[]|null = null,
        baseRate: number|null = null,
        userId: string = "#{userId}",
    ): MultiplyAcquireActionsByUserId {
        return new MultiplyAcquireActionsByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            rateName,
            acquireActions,
            baseRate,
            userId,
        );
    }

    public subExperience(
        experienceName: string,
        propertyId: string,
        experienceValue: number|null = null,
        userId: string = "#{userId}",
    ): SubExperienceByUserId {
        return new SubExperienceByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            experienceValue,
            userId,
        );
    }

    public subRankCap(
        experienceName: string,
        propertyId: string,
        rankCapValue: number,
        userId: string = "#{userId}",
    ): SubRankCapByUserId {
        return new SubRankCapByUserId(
            this.namespaceName,
            experienceName,
            propertyId,
            rankCapValue,
            userId,
        );
    }

    public verifyRank(
        experienceName: string,
        verifyType: StatusVerifyType,
        propertyId: string,
        rankValue: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyRankByUserId {
        return new VerifyRankByUserId(
            this.namespaceName,
            experienceName,
            verifyType,
            propertyId,
            rankValue,
            multiplyValueSpecifyingQuantity,
            userId,
        );
    }

    public verifyRankCap(
        experienceName: string,
        verifyType: StatusVerifyType,
        propertyId: string,
        rankCapValue: number,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyRankCapByUserId {
        return new VerifyRankCapByUserId(
            this.namespaceName,
            experienceName,
            verifyType,
            propertyId,
            rankCapValue,
            multiplyValueSpecifyingQuantity,
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
                "experience",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
