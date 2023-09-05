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
import CategoryModelRef from "./CategoryModelRef";
import IncreaseMaximumIdleMinutesByUserId from "../stampSheet/IncreaseMaximumIdleMinutesByUserId";
import DecreaseMaximumIdleMinutesByUserId from "../stampSheet/DecreaseMaximumIdleMinutesByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public categoryModel(
        categoryName: string,
    ): CategoryModelRef {
        return new CategoryModelRef(
            this.namespaceName,
            categoryName,
        );
    }

    public increaseMaximumIdleMinutes(
        categoryName: string,
        increaseMinutes: number|null = null,
        userId: string|null = "#{userId}",
    ): IncreaseMaximumIdleMinutesByUserId {
        return new IncreaseMaximumIdleMinutesByUserId(
            this.namespaceName,
            categoryName,
            increaseMinutes,
            userId,
        );
    }

    public decreaseMaximumIdleMinutes(
        categoryName: string,
        decreaseMinutes: number|null = null,
        userId: string|null = "#{userId}",
    ): DecreaseMaximumIdleMinutesByUserId {
        return new DecreaseMaximumIdleMinutesByUserId(
            this.namespaceName,
            categoryName,
            decreaseMinutes,
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
                "idle",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
