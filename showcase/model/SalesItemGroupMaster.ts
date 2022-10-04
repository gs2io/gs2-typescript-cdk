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

import SalesItemGroupMasterRef from "../ref/SalesItemGroupMasterRef";

export interface SalesItemGroupMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
}

export default class SalesItemGroupMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly salesItemNames: string[];

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            salesItemNames: string[],
            options?: SalesItemGroupMasterOptions,
    ) {
        super("Showcase_SalesItemGroupMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.salesItemNames = salesItemNames;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Showcase::SalesItemGroupMaster";
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
        if (this.salesItemNames != null) {
            properties["SalesItemNames"] = this.salesItemNames;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): SalesItemGroupMasterRef {
        return new SalesItemGroupMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrSalesItemGroupId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.SalesItemGroupId"
        );
    }
}
