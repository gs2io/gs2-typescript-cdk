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

import RecoverIntervalTableMasterRef from "../ref/RecoverIntervalTableMasterRef";

export interface RecoverIntervalTableMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
}

export default class RecoverIntervalTableMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly experienceModelId: string;
	private readonly values: number[];

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            experienceModelId: string,
            values: number[],
            options?: RecoverIntervalTableMasterOptions,
    ) {
        super("Stamina_RecoverIntervalTableMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.experienceModelId = experienceModelId;
        this.values = values;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Stamina::RecoverIntervalTableMaster";
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
        if (this.experienceModelId != null) {
            properties["ExperienceModelId"] = this.experienceModelId;
        }
        if (this.values != null) {
            properties["Values"] = this.values;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): RecoverIntervalTableMasterRef {
        return new RecoverIntervalTableMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrRecoverIntervalTableId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.RecoverIntervalTableId"
        );
    }
}
