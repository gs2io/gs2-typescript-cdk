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
import StaminaModelRef from "./StaminaModelRef";
import RecoverStaminaByUserId from "../stampSheet/RecoverStaminaByUserId";
import RaiseMaxValueByUserId from "../stampSheet/RaiseMaxValueByUserId";
import SetMaxValueByUserId from "../stampSheet/SetMaxValueByUserId";
import SetRecoverIntervalByUserId from "../stampSheet/SetRecoverIntervalByUserId";
import SetRecoverValueByUserId from "../stampSheet/SetRecoverValueByUserId";
import DecreaseMaxValueByUserId from "../stampSheet/DecreaseMaxValueByUserId";
import ConsumeStaminaByUserId from "../stampSheet/ConsumeStaminaByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public staminaModel(
        staminaName: string,
    ): StaminaModelRef {
        return new StaminaModelRef(
            this.namespaceName,
            staminaName,
        );
    }

    public recoverStamina(
        staminaName: string,
        recoverValue: number,
        userId: string = "#{userId}",
    ): RecoverStaminaByUserId {
        return new RecoverStaminaByUserId(
            this.namespaceName,
            staminaName,
            recoverValue,
            userId,
        );
    }

    public raiseMaxValue(
        staminaName: string,
        raiseValue: number,
        userId: string = "#{userId}",
    ): RaiseMaxValueByUserId {
        return new RaiseMaxValueByUserId(
            this.namespaceName,
            staminaName,
            raiseValue,
            userId,
        );
    }

    public setMaxValue(
        staminaName: string,
        maxValue: number,
        userId: string = "#{userId}",
    ): SetMaxValueByUserId {
        return new SetMaxValueByUserId(
            this.namespaceName,
            staminaName,
            maxValue,
            userId,
        );
    }

    public setRecoverInterval(
        staminaName: string,
        recoverIntervalMinutes: number,
        userId: string = "#{userId}",
    ): SetRecoverIntervalByUserId {
        return new SetRecoverIntervalByUserId(
            this.namespaceName,
            staminaName,
            recoverIntervalMinutes,
            userId,
        );
    }

    public setRecoverValue(
        staminaName: string,
        recoverValue: number,
        userId: string = "#{userId}",
    ): SetRecoverValueByUserId {
        return new SetRecoverValueByUserId(
            this.namespaceName,
            staminaName,
            recoverValue,
            userId,
        );
    }

    public decreaseMaxValue(
        staminaName: string,
        decreaseValue: number,
        userId: string = "#{userId}",
    ): DecreaseMaxValueByUserId {
        return new DecreaseMaxValueByUserId(
            this.namespaceName,
            staminaName,
            decreaseValue,
            userId,
        );
    }

    public consumeStamina(
        staminaName: string,
        consumeValue: number,
        userId: string = "#{userId}",
    ): ConsumeStaminaByUserId {
        return new ConsumeStaminaByUserId(
            this.namespaceName,
            staminaName,
            consumeValue,
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
                "stamina",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
