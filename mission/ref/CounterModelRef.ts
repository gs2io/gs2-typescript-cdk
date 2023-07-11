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
import IncreaseCounterByUserId from "../stampSheet/IncreaseCounterByUserId";

export default class CounterModelRef {
    private readonly namespaceName: string;
    private readonly counterName: string;

    public constructor(
        namespaceName: string,
        counterName: string,
    ) {
        this.namespaceName = namespaceName;
        this.counterName = counterName;
    }

    public increaseCounter(
        value: number,
        userId: string|null = "#{userId}",
    ): IncreaseCounterByUserId {
        return new IncreaseCounterByUserId(
            this.namespaceName,
            this.counterName,
            value,
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
                "counter",
                this.counterName,
            ],
        ).str(
        );
    }
}
