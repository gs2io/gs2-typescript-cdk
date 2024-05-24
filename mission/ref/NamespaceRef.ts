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
import MissionGroupModelRef from "./MissionGroupModelRef";
import CounterModelRef from "./CounterModelRef";
import RevertReceiveByUserId from "../stampSheet/RevertReceiveByUserId";
import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import SetCounterByUserId from "../stampSheet/SetCounterByUserId";
import ScopedValue from "../model/ScopedValue";
import ReceiveByUserId from "../stampSheet/ReceiveByUserId";
import DecreaseCounterByUserId from "../stampSheet/DecreaseCounterByUserId";
import VerifyCounterValueByUserId from "../stampSheet/VerifyCounterValueByUserId";
import { CounterVerifyType } from "../stampSheet/enum/CounterVerifyType";
import { CounterResetType } from "../stampSheet/enum/CounterResetType";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public missionGroupModel(
        missionGroupName: string,
    ): MissionGroupModelRef {
        return new MissionGroupModelRef(
            this.namespaceName,
            missionGroupName,
        );
    }

    public counterModel(
        counterName: string,
    ): CounterModelRef {
        return new CounterModelRef(
            this.namespaceName,
            counterName,
        );
    }

    public revertReceive(
        missionGroupName: string,
        missionTaskName: string,
        userId: string = "#{userId}",
    ): RevertReceiveByUserId {
        return new RevertReceiveByUserId(
            this.namespaceName,
            missionGroupName,
            missionTaskName,
            userId,
        );
    }

    public increaseCounter(
        counterName: string,
        value: number,
        userId: string = "#{userId}",
    ): IncreaseCounterByUserId {
        return new IncreaseCounterByUserId(
            this.namespaceName,
            counterName,
            value,
            userId,
        );
    }

    public setCounter(
        counterName: string,
        values: ScopedValue[]|null = null,
        userId: string = "#{userId}",
    ): SetCounterByUserId {
        return new SetCounterByUserId(
            this.namespaceName,
            counterName,
            values,
            userId,
        );
    }

    public receive(
        missionGroupName: string,
        missionTaskName: string,
        userId: string = "#{userId}",
    ): ReceiveByUserId {
        return new ReceiveByUserId(
            this.namespaceName,
            missionGroupName,
            missionTaskName,
            userId,
        );
    }

    public decreaseCounter(
        counterName: string,
        value: number,
        userId: string = "#{userId}",
    ): DecreaseCounterByUserId {
        return new DecreaseCounterByUserId(
            this.namespaceName,
            counterName,
            value,
            userId,
        );
    }

    public verifyCounterValue(
        counterName: string,
        verifyType: CounterVerifyType,
        resetType: CounterResetType,
        value: number|null = null,
        multiplyValueSpecifyingQuantity: boolean|null = null,
        userId: string = "#{userId}",
    ): VerifyCounterValueByUserId {
        return new VerifyCounterValueByUserId(
            this.namespaceName,
            counterName,
            verifyType,
            resetType,
            value,
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
                "mission",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
