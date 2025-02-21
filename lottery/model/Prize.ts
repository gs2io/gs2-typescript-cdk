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
import { AcquireAction } from "../../core/model";
import { PrizeOptions } from "./options/PrizeOptions";
import { PrizeTypeIsActionOptions } from "./options/PrizeTypeIsActionOptions";
import { PrizeTypeIsPrizeTableOptions } from "./options/PrizeTypeIsPrizeTableOptions";
import { PrizeType } from "./enums/PrizeType";

export default class Prize {
    private readonly prizeId: string;
    private readonly type: PrizeType;
    private readonly weight: number;
    private readonly acquireActions: AcquireAction[]|null = null;
    private readonly drawnLimit: number|null = null;
    private readonly limitFailOverPrizeId: string|null = null;
    private readonly prizeTableName: string|null = null;

    public constructor(
        prizeId: string,
        type: PrizeType,
        weight: number,
        options: PrizeOptions|null = null,
    ) {
        this.prizeId = prizeId;
        this.type = type;
        this.weight = weight;
        this.acquireActions = options?.acquireActions ?? null;
        this.drawnLimit = options?.drawnLimit ?? null;
        this.limitFailOverPrizeId = options?.limitFailOverPrizeId ?? null;
        this.prizeTableName = options?.prizeTableName ?? null;
    }

    public static typeIsAction(
        prizeId: string,
        weight: number,
        acquireActions: AcquireAction[],
        options: PrizeTypeIsActionOptions|null = null,
    ): Prize {
        return new Prize(
            prizeId,
            PrizeType.ACTION,
            weight,
            {
                acquireActions: acquireActions,
                drawnLimit: options?.drawnLimit,
            },
        );
    }

    public static typeIsPrizeTable(
        prizeId: string,
        weight: number,
        prizeTableName: string,
        options: PrizeTypeIsPrizeTableOptions|null = null,
    ): Prize {
        return new Prize(
            prizeId,
            PrizeType.PRIZE_TABLE,
            weight,
            {
                prizeTableName: prizeTableName,
                drawnLimit: options?.drawnLimit,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.prizeId != null) {
            properties["prizeId"] = this.prizeId;
        }
        if (this.type != null) {
            properties["type"] = this.type;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties(
                ));
        }
        if (this.drawnLimit != null) {
            properties["drawnLimit"] = this.drawnLimit;
        }
        if (this.limitFailOverPrizeId != null) {
            properties["limitFailOverPrizeId"] = this.limitFailOverPrizeId;
        }
        if (this.prizeTableName != null) {
            properties["prizeTableName"] = this.prizeTableName;
        }
        if (this.weight != null) {
            properties["weight"] = this.weight;
        }

        return properties;
    }
}
