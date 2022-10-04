/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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
import CurrentLotteryMasterRef from "./CurrentLotteryMasterRef";
import PrizeTableRef from "./PrizeTableRef";
import LotteryModelRef from "./LotteryModelRef";
import PrizeTableMasterRef from "./PrizeTableMasterRef";
import LotteryModelMasterRef from "./LotteryModelMasterRef";


export default class NamespaceRef {
    private namespaceName: string;

    public constructor(
            namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public currentLotteryMaster(
    ): CurrentLotteryMasterRef {
        return new CurrentLotteryMasterRef(
            this.namespaceName,
        );
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

    public prizeTableMaster(
            prizeTableName: string,
    ): PrizeTableMasterRef {
        return new PrizeTableMasterRef(
            this.namespaceName,
            prizeTableName,
        );
    }

    public lotteryModelMaster(
            lotteryName: string,
    ): LotteryModelMasterRef {
        return new LotteryModelMasterRef(
            this.namespaceName,
            lotteryName,
        );
    }

    public grn(): string {
        return new Join(
            ":",
            [
                "grn",
                "gs2",
                GetAttr.region().str(),
                GetAttr.ownerId().str(),
                "lottery",
                this.namespaceName
            ]
        ).str();
    }
}
