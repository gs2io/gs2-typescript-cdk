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

import core from "../../core";
import {GetAttr} from "../../core/func";
import {Stack} from "../../core/model";

export const LotteryModelMasterMode = {
    NORMAL: "normal",
    BOX: "box",
} as const;
export type LotteryModelMasterMode = typeof LotteryModelMasterMode[keyof typeof LotteryModelMasterMode];

export const LotteryModelMasterMethod = {
    PRIZE_TABLE: "prize_table",
    SCRIPT: "script",
} as const;
export type LotteryModelMasterMethod = typeof LotteryModelMasterMethod[keyof typeof LotteryModelMasterMethod];

import LotteryModelMasterRef from "../ref/LotteryModelMasterRef";

export interface LotteryModelMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
    prizeTableName?: string|null|undefined;
    choicePrizeTableScriptId?: string|null|undefined;
}

export interface LotteryModelMasterPrizeTableOptions {
}

export interface LotteryModelMasterScriptOptions {
}

export default class LotteryModelMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly mode: LotteryModelMasterMode;
	private readonly method: LotteryModelMasterMethod;
	private readonly prizeTableName: string|null = null;
	private readonly choicePrizeTableScriptId: string|null = null;

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            mode: LotteryModelMasterMode,
            method: LotteryModelMasterMethod,
            options?: LotteryModelMasterOptions,
    ) {
        super("Lottery_LotteryModelMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.mode = mode;
        this.method = method;
        this.prizeTableName = options?.prizeTableName ?? null;
        this.choicePrizeTableScriptId = options?.choicePrizeTableScriptId ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Lottery::LotteryModelMaster";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
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
    ): LotteryModelMasterRef {
        return new LotteryModelMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrLotteryModelId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.LotteryModelId"
        );
    }
}
