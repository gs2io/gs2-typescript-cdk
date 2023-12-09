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
import BalanceParameterModelRef from "./BalanceParameterModelRef";
import RarityParameterModelRef from "./RarityParameterModelRef";
import ReDrawBalanceParameterStatusByUserId from "../stampSheet/ReDrawBalanceParameterStatusByUserId";
import SetBalanceParameterStatusByUserId from "../stampSheet/SetBalanceParameterStatusByUserId";
import BalanceParameterValue from "../model/BalanceParameterValue";
import ReDrawRarityParameterStatusByUserId from "../stampSheet/ReDrawRarityParameterStatusByUserId";
import AddRarityParameterStatusByUserId from "../stampSheet/AddRarityParameterStatusByUserId";
import SetRarityParameterStatusByUserId from "../stampSheet/SetRarityParameterStatusByUserId";
import RarityParameterValue from "../model/RarityParameterValue";
import VerifyRarityParameterStatusByUserId from "../stampSheet/VerifyRarityParameterStatusByUserId";
import { RarityParameterStatusVerifyType } from "../stampSheet/enum/RarityParameterStatusVerifyType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public balanceParameterModel(
        parameterName: string,
    ): BalanceParameterModelRef {
        return new BalanceParameterModelRef(
            this.namespaceName,
            parameterName,
        );
    }

    public rarityParameterModel(
        parameterName: string,
    ): RarityParameterModelRef {
        return new RarityParameterModelRef(
            this.namespaceName,
            parameterName,
        );
    }

    public reDrawBalanceParameterStatus(
        parameterName: string,
        propertyId: string,
        fixedParameterNames: string[]|null = null,
        userId: string = "#{userId}",
    ): ReDrawBalanceParameterStatusByUserId {
        return new ReDrawBalanceParameterStatusByUserId(
            this.namespaceName,
            parameterName,
            propertyId,
            fixedParameterNames,
            userId,
        );
    }

    public setBalanceParameterStatus(
        parameterName: string,
        propertyId: string,
        parameterValues: BalanceParameterValue[],
        userId: string = "#{userId}",
    ): SetBalanceParameterStatusByUserId {
        return new SetBalanceParameterStatusByUserId(
            this.namespaceName,
            parameterName,
            propertyId,
            parameterValues,
            userId,
        );
    }

    public reDrawRarityParameterStatus(
        parameterName: string,
        propertyId: string,
        fixedParameterNames: string[]|null = null,
        userId: string = "#{userId}",
    ): ReDrawRarityParameterStatusByUserId {
        return new ReDrawRarityParameterStatusByUserId(
            this.namespaceName,
            parameterName,
            propertyId,
            fixedParameterNames,
            userId,
        );
    }

    public addRarityParameterStatus(
        parameterName: string,
        propertyId: string,
        count: number|null = null,
        userId: string = "#{userId}",
    ): AddRarityParameterStatusByUserId {
        return new AddRarityParameterStatusByUserId(
            this.namespaceName,
            parameterName,
            propertyId,
            count,
            userId,
        );
    }

    public setRarityParameterStatus(
        parameterName: string,
        propertyId: string,
        parameterValues: RarityParameterValue[]|null = null,
        userId: string = "#{userId}",
    ): SetRarityParameterStatusByUserId {
        return new SetRarityParameterStatusByUserId(
            this.namespaceName,
            parameterName,
            propertyId,
            parameterValues,
            userId,
        );
    }

    public verifyRarityParameterStatus(
        parameterName: string,
        propertyId: string,
        verifyType: RarityParameterStatusVerifyType,
        parameterValueName: string|null = null,
        parameterCount: number|null = null,
        userId: string = "#{userId}",
    ): VerifyRarityParameterStatusByUserId {
        return new VerifyRarityParameterStatusByUserId(
            this.namespaceName,
            parameterName,
            propertyId,
            verifyType,
            parameterValueName,
            parameterCount,
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
                "enchant",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
