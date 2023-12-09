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
import RecoverStaminaByUserId from "../stampSheet/RecoverStaminaByUserId";
import RaiseMaxValueByUserId from "../stampSheet/RaiseMaxValueByUserId";
import SetMaxValueByUserId from "../stampSheet/SetMaxValueByUserId";
import SetRecoverIntervalByUserId from "../stampSheet/SetRecoverIntervalByUserId";
import SetRecoverValueByUserId from "../stampSheet/SetRecoverValueByUserId";
import DecreaseMaxValueByUserId from "../stampSheet/DecreaseMaxValueByUserId";
import ConsumeStaminaByUserId from "../stampSheet/ConsumeStaminaByUserId";

export default class StaminaModelRef {
    private readonly namespaceName: string;
    private readonly staminaName: string;

    public constructor(
        namespaceName: string,
        staminaName: string,
    ) {
        this.namespaceName = namespaceName;
        this.staminaName = staminaName;
    }

    public recoverStamina(
        recoverValue: number,
        userId: string = "#{userId}",
    ): RecoverStaminaByUserId {
        return new RecoverStaminaByUserId(
            this.namespaceName,
            this.staminaName,
            recoverValue,
            userId,
        );
    }

    public raiseMaxValue(
        raiseValue: number,
        userId: string = "#{userId}",
    ): RaiseMaxValueByUserId {
        return new RaiseMaxValueByUserId(
            this.namespaceName,
            this.staminaName,
            raiseValue,
            userId,
        );
    }

    public setMaxValue(
        maxValue: number,
        userId: string = "#{userId}",
    ): SetMaxValueByUserId {
        return new SetMaxValueByUserId(
            this.namespaceName,
            this.staminaName,
            maxValue,
            userId,
        );
    }

    public setRecoverInterval(
        recoverIntervalMinutes: number,
        userId: string = "#{userId}",
    ): SetRecoverIntervalByUserId {
        return new SetRecoverIntervalByUserId(
            this.namespaceName,
            this.staminaName,
            recoverIntervalMinutes,
            userId,
        );
    }

    public setRecoverValue(
        recoverValue: number,
        userId: string = "#{userId}",
    ): SetRecoverValueByUserId {
        return new SetRecoverValueByUserId(
            this.namespaceName,
            this.staminaName,
            recoverValue,
            userId,
        );
    }

    public decreaseMaxValue(
        decreaseValue: number,
        userId: string = "#{userId}",
    ): DecreaseMaxValueByUserId {
        return new DecreaseMaxValueByUserId(
            this.namespaceName,
            this.staminaName,
            decreaseValue,
            userId,
        );
    }

    public consumeStamina(
        consumeValue: number,
        userId: string = "#{userId}",
    ): ConsumeStaminaByUserId {
        return new ConsumeStaminaByUserId(
            this.namespaceName,
            this.staminaName,
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
                "model",
                this.staminaName,
            ],
        ).str(
        );
    }
}
