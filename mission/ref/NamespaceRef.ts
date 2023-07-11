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
import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";
import ReceiveByUserId from "../stampSheet/ReceiveByUserId";

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

    public increaseCounter(
        counterName: string,
        value: number,
        userId: string|null = "#{userId}",
    ): IncreaseCounterByUserId {
        return new IncreaseCounterByUserId(
            this.namespaceName,
            counterName,
            value,
            userId,
        );
    }

    public receive(
        missionGroupName: string,
        missionTaskName: string,
        userId: string|null = "#{userId}",
    ): ReceiveByUserId {
        return new ReceiveByUserId(
            this.namespaceName,
            missionGroupName,
            missionTaskName,
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
