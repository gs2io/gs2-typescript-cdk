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

import StaminaModelMasterRef from "../ref/StaminaModelMasterRef";

export interface StaminaModelMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
    maxCapacity?: number|null|undefined;
    maxStaminaTableName?: string|null|undefined;
    recoverIntervalTableName?: string|null|undefined;
    recoverValueTableName?: string|null|undefined;
}

export default class StaminaModelMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly recoverIntervalMinutes: number;
	private readonly recoverValue: number;
	private readonly initialCapacity: number;
	private readonly isOverflow: boolean;
	private readonly maxCapacity: number|null = null;
	private readonly maxStaminaTableName: string|null = null;
	private readonly recoverIntervalTableName: string|null = null;
	private readonly recoverValueTableName: string|null = null;

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            recoverIntervalMinutes: number,
            recoverValue: number,
            initialCapacity: number,
            isOverflow: boolean,
            options?: StaminaModelMasterOptions,
    ) {
        super("Stamina_StaminaModelMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        this.recoverValue = recoverValue;
        this.initialCapacity = initialCapacity;
        this.isOverflow = isOverflow;
        this.maxCapacity = options?.maxCapacity ?? null;
        this.maxStaminaTableName = options?.maxStaminaTableName ?? null;
        this.recoverIntervalTableName = options?.recoverIntervalTableName ?? null;
        this.recoverValueTableName = options?.recoverValueTableName ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Stamina::StaminaModelMaster";
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
        if (this.maxStaminaTableName != null) {
            properties["MaxStaminaTableName"] = this.maxStaminaTableName;
        }
        if (this.recoverIntervalTableName != null) {
            properties["RecoverIntervalTableName"] = this.recoverIntervalTableName;
        }
        if (this.recoverValueTableName != null) {
            properties["RecoverValueTableName"] = this.recoverValueTableName;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): StaminaModelMasterRef {
        return new StaminaModelMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrStaminaModelId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.StaminaModelId"
        );
    }
}
