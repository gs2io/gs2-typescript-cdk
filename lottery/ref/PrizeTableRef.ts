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
import PrizeLimitRef from "./PrizeLimitRef";


export default class PrizeTableRef {
    private namespaceName: string;
    private prizeTableName: string;

    public constructor(
            namespaceName: string,
            prizeTableName: string,
    ) {
        this.namespaceName = namespaceName;
        this.prizeTableName = prizeTableName;
    }

    public prizeLimit(
            prizeId: string,
    ): PrizeLimitRef {
        return new PrizeLimitRef(
            this.namespaceName,
            this.prizeTableName,
            prizeId,
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
                this.namespaceName,
                "table",
                this.prizeTableName
            ]
        ).str();
    }
}
