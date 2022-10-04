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
import MaxStaminaTable from "../model/MaxStaminaTable";
import RecoverIntervalTable from "../model/RecoverIntervalTable";
import RecoverValueTable from "../model/RecoverValueTable";

import StaminaModelRef from "../ref/StaminaModelRef";

export interface StaminaModelOptions {
    metadata?: string|null|undefined;
    maxCapacity?: number|null|undefined;
    maxStaminaTable?: MaxStaminaTable|null|undefined;
    recoverIntervalTable?: RecoverIntervalTable|null|undefined;
    recoverValueTable?: RecoverValueTable|null|undefined;
}


export default class StaminaModel {
	private readonly name: string;
    private readonly metadata: string|null = null;
	private readonly recoverIntervalMinutes: number;
	private readonly recoverValue: number;
	private readonly initialCapacity: number;
	private readonly isOverflow: boolean;
    private readonly maxCapacity: number|null = null;
    private readonly maxStaminaTable: MaxStaminaTable|null = null;
    private readonly recoverIntervalTable: RecoverIntervalTable|null = null;
    private readonly recoverValueTable: RecoverValueTable|null = null;

    public constructor(
            name: string,
            recoverIntervalMinutes: number,
            recoverValue: number,
            initialCapacity: number,
            isOverflow: boolean,
            options?: StaminaModelOptions,
    ) {
        this.name = name;
        this.metadata = options?.metadata ?? null;
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        this.recoverValue = recoverValue;
        this.initialCapacity = initialCapacity;
        this.isOverflow = isOverflow;
        this.maxCapacity = options?.maxCapacity ?? null;
        this.maxStaminaTable = options?.maxStaminaTable ?? null;
        this.recoverIntervalTable = options?.recoverIntervalTable ?? null;
        this.recoverValueTable = options?.recoverValueTable ?? null;
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.metadata != null) {
            properties["Metadata"] = this.metadata;
        }
        if (this.recoverIntervalMinutes != null) {
            properties["RecoverIntervalMinutes"] = this.recoverIntervalMinutes;
        }
        if (this.recoverValue != null) {
            properties["RecoverValue"] = this.recoverValue;
        }
        if (this.initialCapacity != null) {
            properties["InitialCapacity"] = this.initialCapacity;
        }
        if (this.isOverflow != null) {
            properties["IsOverflow"] = this.isOverflow;
        }
        if (this.maxCapacity != null) {
            properties["MaxCapacity"] = this.maxCapacity;
        }
        if (this.maxStaminaTable != null) {
            properties["MaxStaminaTable"] = this.maxStaminaTable.properties();
        }
        if (this.recoverIntervalTable != null) {
            properties["RecoverIntervalTable"] = this.recoverIntervalTable.properties();
        }
        if (this.recoverValueTable != null) {
            properties["RecoverValueTable"] = this.recoverValueTable.properties();
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): StaminaModelRef {
        return new StaminaModelRef(
            namespaceName,
            this.name,
        );
    }
}
