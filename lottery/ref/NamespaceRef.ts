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
import PrizeTableRef from "./PrizeTableRef";
import LotteryModelRef from "./LotteryModelRef";
import ResetBoxByUserId from "../stampSheet/ResetBoxByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public prizeTable(
        prizeTableName: string,
    ): PrizeTableRef {
        return new PrizeTableRef(
            this.namespaceName,
            prizeTableName,
        );
    }

    public lotteryModel(
        lotteryName: string,
    ): LotteryModelRef {
        return new LotteryModelRef(
            this.namespaceName,
            lotteryName,
        );
    }

    public resetBox(
        prizeTableName: string,
        userId: string = "#{userId}",
    ): ResetBoxByUserId {
        return new ResetBoxByUserId(
            this.namespaceName,
            prizeTableName,
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
                "lottery",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
