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
import DecrementPurchaseCountByUserId from "../stampSheet/DecrementPurchaseCountByUserId";
import ForceReDrawByUserId from "../stampSheet/ForceReDrawByUserId";
import IncrementPurchaseCountByUserId from "../stampSheet/IncrementPurchaseCountByUserId";

export default class NamespaceRef {
    private readonly namespaceName: string;

    public constructor(
        namespaceName: string,
    ) {
        this.namespaceName = namespaceName;
    }

    public decrementPurchaseCount(
        showcaseName: string,
        displayItemName: string,
        count: number,
        userId: string|null = "#{userId}",
    ): DecrementPurchaseCountByUserId {
        return new DecrementPurchaseCountByUserId(
            this.namespaceName,
            showcaseName,
            displayItemName,
            count,
            userId,
        );
    }

    public forceReDraw(
        showcaseName: string,
        userId: string|null = "#{userId}",
    ): ForceReDrawByUserId {
        return new ForceReDrawByUserId(
            this.namespaceName,
            showcaseName,
            userId,
        );
    }

    public incrementPurchaseCount(
        showcaseName: string,
        displayItemName: string,
        count: number,
        userId: string|null = "#{userId}",
    ): IncrementPurchaseCountByUserId {
        return new IncrementPurchaseCountByUserId(
            this.namespaceName,
            showcaseName,
            displayItemName,
            count,
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
                "showcase",
                this.namespaceName,
            ],
        ).str(
        );
    }
}
