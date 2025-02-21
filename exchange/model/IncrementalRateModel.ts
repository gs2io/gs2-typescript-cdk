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
import { ConsumeAction } from "../../core/model";
import { AcquireAction } from "../../core/model";
import { IncrementalRateModelOptions } from "./options/IncrementalRateModelOptions";
import { IncrementalRateModelCalculateTypeIsLinearOptions } from "./options/IncrementalRateModelCalculateTypeIsLinearOptions";
import { IncrementalRateModelCalculateTypeIsPowerOptions } from "./options/IncrementalRateModelCalculateTypeIsPowerOptions";
import { IncrementalRateModelCalculateTypeIsGs2ScriptOptions } from "./options/IncrementalRateModelCalculateTypeIsGs2ScriptOptions";
import { IncrementalRateModelCalculateType } from "./enums/IncrementalRateModelCalculateType";

export default class IncrementalRateModel {
    private readonly name: string;
    private readonly consumeAction: ConsumeAction;
    private readonly calculateType: IncrementalRateModelCalculateType;
    private readonly exchangeCountId: string;
    private readonly maximumExchangeCount: number;
    private readonly metadata: string|null = null;
    private readonly baseValue: number|null = null;
    private readonly coefficientValue: number|null = null;
    private readonly calculateScriptId: string|null = null;
    private readonly acquireActions: AcquireAction[]|null = null;

    public constructor(
        name: string,
        consumeAction: ConsumeAction,
        calculateType: IncrementalRateModelCalculateType,
        exchangeCountId: string,
        maximumExchangeCount: number,
        options: IncrementalRateModelOptions|null = null,
    ) {
        this.name = name;
        this.consumeAction = consumeAction;
        this.calculateType = calculateType;
        this.exchangeCountId = exchangeCountId;
        this.maximumExchangeCount = maximumExchangeCount;
        this.metadata = options?.metadata ?? null;
        this.baseValue = options?.baseValue ?? null;
        this.coefficientValue = options?.coefficientValue ?? null;
        this.calculateScriptId = options?.calculateScriptId ?? null;
        this.acquireActions = options?.acquireActions ?? null;
    }

    public static calculateTypeIsLinear(
        name: string,
        consumeAction: ConsumeAction,
        exchangeCountId: string,
        maximumExchangeCount: number,
        baseValue: number,
        coefficientValue: number,
        options: IncrementalRateModelCalculateTypeIsLinearOptions|null = null,
    ): IncrementalRateModel {
        return new IncrementalRateModel(
            name,
            consumeAction,
            IncrementalRateModelCalculateType.LINEAR,
            exchangeCountId,
            maximumExchangeCount,
            {
                baseValue: baseValue,
                coefficientValue: coefficientValue,
                metadata: options?.metadata,
                acquireActions: options?.acquireActions,
            },
        );
    }

    public static calculateTypeIsPower(
        name: string,
        consumeAction: ConsumeAction,
        exchangeCountId: string,
        maximumExchangeCount: number,
        coefficientValue: number,
        options: IncrementalRateModelCalculateTypeIsPowerOptions|null = null,
    ): IncrementalRateModel {
        return new IncrementalRateModel(
            name,
            consumeAction,
            IncrementalRateModelCalculateType.POWER,
            exchangeCountId,
            maximumExchangeCount,
            {
                coefficientValue: coefficientValue,
                metadata: options?.metadata,
                acquireActions: options?.acquireActions,
            },
        );
    }

    public static calculateTypeIsGs2Script(
        name: string,
        consumeAction: ConsumeAction,
        exchangeCountId: string,
        maximumExchangeCount: number,
        calculateScriptId: string,
        options: IncrementalRateModelCalculateTypeIsGs2ScriptOptions|null = null,
    ): IncrementalRateModel {
        return new IncrementalRateModel(
            name,
            consumeAction,
            IncrementalRateModelCalculateType.GS2_SCRIPT,
            exchangeCountId,
            maximumExchangeCount,
            {
                calculateScriptId: calculateScriptId,
                metadata: options?.metadata,
                acquireActions: options?.acquireActions,
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
        if (this.consumeAction != null) {
            properties["consumeAction"] = this.consumeAction?.properties(
            );
        }
        if (this.calculateType != null) {
            properties["calculateType"] = this.calculateType;
        }
        if (this.baseValue != null) {
            properties["baseValue"] = this.baseValue;
        }
        if (this.coefficientValue != null) {
            properties["coefficientValue"] = this.coefficientValue;
        }
        if (this.calculateScriptId != null) {
            properties["calculateScriptId"] = this.calculateScriptId;
        }
        if (this.exchangeCountId != null) {
            properties["exchangeCountId"] = this.exchangeCountId;
        }
        if (this.maximumExchangeCount != null) {
            properties["maximumExchangeCount"] = this.maximumExchangeCount;
        }
        if (this.acquireActions != null) {
            properties["acquireActions"] = this.acquireActions.map(v => v.properties(
                ));
        }

        return properties;
    }
}
