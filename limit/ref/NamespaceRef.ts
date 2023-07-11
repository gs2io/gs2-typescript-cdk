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
import LimitModelRef from "./LimitModelRef";
import DeleteCounterByUserId from "../stampSheet/DeleteCounterByUserId";
import CountUpByUserId from "../stampSheet/CountUpByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public limitModel(
        limitName: string,
    ): LimitModelRef {
        return new LimitModelRef(
            this.namespaceName,
            limitName,
        );
    }

    public deleteCounter(
        limitName: string,
        counterName: string,
        userId: string|null = "#{userId}",
    ): DeleteCounterByUserId {
        return new DeleteCounterByUserId(
            this.namespaceName,
            limitName,
            counterName,
            userId,
        );
    }

    public countUp(
        limitName: string,
        counterName: string,
        countUpValue: number,
        maxValue: number|null = null,
        userId: string|null = "#{userId}",
    ): CountUpByUserId {
        return new CountUpByUserId(
            this.namespaceName,
            limitName,
            counterName,
            countUpValue,
            maxValue,
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
                "limit",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
