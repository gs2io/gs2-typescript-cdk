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
import { AcquireAction } from "../../core/model";

export const PrizeType = {
    ACTION: "action",
    PRIZE_TABLE: "prize_table",
} as const;
export type PrizeType = typeof PrizeType[keyof typeof PrizeType];

export interface PrizeOptions {
    acquireActions?: AcquireAction[]|null|undefined;
    drawnLimit?: number|null|undefined;
    limitFailOverPrizeId?: string|null|undefined;
    prizeTableName?: string|null|undefined;
}

export default class Prize {
	private readonly prizeId: string;
	private readonly type: PrizeType;
    private readonly acquireActions: AcquireAction[]|null = null;
    private readonly drawnLimit: number|null = null;
    private readonly limitFailOverPrizeId: string|null = null;
    private readonly prizeTableName: string|null = null;
	private readonly weight: number;

    public constructor(
            prizeId: string,
            type: PrizeType,
            weight: number,
            options?: PrizeOptions,
    ) {
        this.prizeId = prizeId;
        this.type = type;
        this.acquireActions = options?.acquireActions ?? null;
        this.drawnLimit = options?.drawnLimit ?? null;
        this.limitFailOverPrizeId = options?.limitFailOverPrizeId ?? null;
        this.prizeTableName = options?.prizeTableName ?? null;
        this.weight = weight;
    }

    public static action(
        prizeId: string,
        acquireActions: AcquireAction[],
        weight: number,
        drawnLimit: number|null = null,
        limitFailOverPrizeId: string|null = null,
    ): Prize {
        return new Prize(
            prizeId,
            PrizeType.ACTION,
            weight,
            {
                acquireActions: acquireActions,
                drawnLimit: drawnLimit,
                limitFailOverPrizeId: limitFailOverPrizeId,
            }
        )
    }

    public static prizeTable(
        prizeId: string,
        acquireActions: AcquireAction[],
        prizeTableName: string,
        weight: number,
        drawnLimit: number|null = null,
    ): Prize {
        return new Prize(
            prizeId,
            PrizeType.PRIZE_TABLE,
            weight,
            {
                drawnLimit: drawnLimit,
                prizeTableName: prizeTableName,
            }
        )
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.prizeId != null) {
            properties["PrizeId"] = this.prizeId;
        }
        if (this.type != null) {
            properties["Type"] = this.type.toString();
        }
        if (this.acquireActions != null) {
            properties["AcquireActions"] = this.acquireActions.map(v => v.properties());
        }
        if (this.drawnLimit != null) {
            properties["DrawnLimit"] = this.drawnLimit;
        }
        if (this.limitFailOverPrizeId != null) {
            properties["LimitFailOverPrizeId"] = this.limitFailOverPrizeId;
        }
        if (this.prizeTableName != null) {
            properties["PrizeTableName"] = this.prizeTableName;
        }
        if (this.weight != null) {
            properties["Weight"] = this.weight;
        }
        return properties;
    }
}
