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
 *
 * deny overwrite
 */
import { LotteryModelOptions } from "./options/LotteryModelOptions";
import { LotteryModelMethodIsPrizeTableOptions } from "./options/LotteryModelMethodIsPrizeTableOptions";
import { LotteryModelMethodIsScriptOptions } from "./options/LotteryModelMethodIsScriptOptions";
import { LotteryModelMode } from "./enums/LotteryModelMode";
import { LotteryModelMethod } from "./enums/LotteryModelMethod";

export default class LotteryModel {
    private readonly name: string;
    private readonly mode: LotteryModelMode;
    private readonly method: LotteryModelMethod;
    private readonly metadata: string|null = null;
    private readonly prizeTableName: string|null = null;
    private readonly choicePrizeTableScriptId: string|null = null;

    public constructor(
        name: string,
        mode: LotteryModelMode,
        method: LotteryModelMethod,
        options: LotteryModelOptions|null = null,
    ) {
        this.name = name;
        this.mode = mode;
        this.method = method;
        this.metadata = options?.metadata ?? null;
        this.prizeTableName = options?.prizeTableName ?? null;
        this.choicePrizeTableScriptId = options?.choicePrizeTableScriptId ?? null;
    }

    public static methodIsPrizeTable(
        name: string,
        mode: LotteryModelMode,
        prizeTableName: string,
        options: LotteryModelMethodIsPrizeTableOptions|null = null,
    ): LotteryModel {
        return new LotteryModel(
            name,
            mode,
            LotteryModelMethod.PRIZE_TABLE,
            {
                prizeTableName: prizeTableName,
                metadata: options?.metadata,
            },
        );
    }

    public static methodIsScript(
        name: string,
        mode: LotteryModelMode,
        choicePrizeTableScriptId: string,
        options: LotteryModelMethodIsScriptOptions|null = null,
    ): LotteryModel {
        return new LotteryModel(
            name,
            mode,
            LotteryModelMethod.SCRIPT,
            {
                choicePrizeTableScriptId: choicePrizeTableScriptId,
                metadata: options?.metadata,
            },
        );
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.mode != null) {
            properties["mode"] = this.mode;
        }
        if (this.method != null) {
            properties["method"] = this.method;
        }
        if (this.prizeTableName != null) {
            properties["prizeTableName"] = this.prizeTableName;
        }
        if (this.choicePrizeTableScriptId != null) {
            properties["choicePrizeTableScriptId"] = this.choicePrizeTableScriptId;
        }

        return properties;
    }
}
