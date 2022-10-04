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
import DisplayItemMaster from "./DisplayItemMaster";

import ShowcaseMasterRef from "../ref/ShowcaseMasterRef";

export interface ShowcaseMasterOptions {
    description?: string|null|undefined;
    metadata?: string|null|undefined;
    salesPeriodEventId?: string|null|undefined;
}

export default class ShowcaseMaster extends core.CdkResource {

    private stack: Stack;
	private readonly namespaceName: string;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly metadata: string|null = null;
	private readonly displayItems: DisplayItemMaster[];
	private readonly salesPeriodEventId: string|null = null;

    public constructor(
            stack: Stack,
            namespaceName: string,
            name: string,
            displayItems: DisplayItemMaster[],
            options?: ShowcaseMasterOptions,
    ) {
        super("Showcase_ShowcaseMaster_" + name);

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.name = name;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
        this.displayItems = displayItems;
        this.salesPeriodEventId = options?.salesPeriodEventId ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Showcase::ShowcaseMaster";
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
        if (this.displayItems != null) {
            properties["DisplayItems"] = this.displayItems.map(v => v.properties());
        }
        if (this.salesPeriodEventId != null) {
            properties["SalesPeriodEventId"] = this.salesPeriodEventId;
        }
        return properties;
    }

    public ref(
            namespaceName: string,
    ): ShowcaseMasterRef {
        return new ShowcaseMasterRef(
            namespaceName,
            this.name,
        );
    }

    public getAttrShowcaseId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.ShowcaseId"
        );
    }
}
