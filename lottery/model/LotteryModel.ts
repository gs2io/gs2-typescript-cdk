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

export const LotteryModelMode = {
    NORMAL: "normal",
    BOX: "box",
} as const;
export type LotteryModelMode = typeof LotteryModelMode[keyof typeof LotteryModelMode];

export const LotteryModelMethod = {
    PRIZE_TABLE: "prize_table",
    SCRIPT: "script",
} as const;
export type LotteryModelMethod = typeof LotteryModelMethod[keyof typeof LotteryModelMethod];

import LotteryModelRef from "../ref/LotteryModelRef";

export interface LotteryModelOptions {
    metadata?: string|null|undefined;
    prizeTableName?: string|null|undefined;
    choicePrizeTableScriptId?: string|null|undefined;
}

export interface LotteryModelPrizeTableOptions {
    metadata?: string|null|undefined,
    prizeTableName?: string|null|undefined,
}

export interface LotteryModelScriptOptions {
    metadata?: string|null|undefined,
    choicePrizeTableScriptId?: string|null|undefined,
}


export default class LotteryModel {
	private readonly name: string;
    private readonly metadata: string|null = null;
	private readonly mode: LotteryModelMode;
	private readonly method: LotteryModelMethod;
    private readonly prizeTableName: string|null = null;
    private readonly choicePrizeTableScriptId: string|null = null;

    public constructor(
            name: string,
            mode: LotteryModelMode,
            method: LotteryModelMethod,
            options?: LotteryModelOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.mode = mode;
        this.method = method;
        this.prizeTableName = options?.prizeTableName ?? null;
        this.choicePrizeTableScriptId = options?.choicePrizeTableScriptId ?? null;
    }

    public static prizeTable(
        name: string,
        mode: LotteryModelMode,
        prizeTableName: string,
        options?: LotteryModelPrizeTableOptions,
    ): LotteryModel {
        return new LotteryModel(
            name,
            mode,
            LotteryModelMethod.PRIZE_TABLE,
            {
                metadata: options?.metadata ?? null,
                prizeTableName: options?.prizeTableName ?? null,
            },
        )
    }

    public static script(
        name: string,
        mode: LotteryModelMode,
        choicePrizeTableScriptId: string,
        options?: LotteryModelScriptOptions,
    ): LotteryModel {
        return new LotteryModel(
            name,
            mode,
            LotteryModelMethod.SCRIPT,
            {
                metadata: options?.metadata ?? null,
                choicePrizeTableScriptId: options?.choicePrizeTableScriptId ?? null,
            },
        )
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.mode != null) {
            properties["Mode"] = this.mode;
        }
        if (this.method != null) {
            properties["Method"] = this.method;
        }
        if (this.prizeTableName != null) {
            properties["PrizeTableName"] = this.prizeTableName;
        }
        if (this.choicePrizeTableScriptId != null) {
            properties["ChoicePrizeTableScriptId"] = this.choicePrizeTableScriptId;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): LotteryModelRef {
        return new LotteryModelRef(
            namespaceName,
            this.name,
        );
    }
}
