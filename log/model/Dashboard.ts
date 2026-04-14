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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import DashboardRef from "../ref/DashboardRef";

import { DashboardOptions } from "./options/DashboardOptions";

export default class Dashboard extends CdkResource {
    private readonly stack: Stack;
    private readonly namespaceName: string;
    private readonly displayName: string;
    private readonly description: string|null = null;

    public constructor(
        stack: Stack,
        namespaceName: string,
        displayName: string,
        options: DashboardOptions|null = null,
    ) {
        super(
            "Log_Dashboard_" + displayName
        );

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.displayName = displayName;
        this.description = options?.description ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "name";
    }

    public resourceType(
    ): string {
        return "GS2::Log::Dashboard";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.displayName != null) {
            properties["DisplayName"] = this.displayName;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }

        return properties;
    }

    public ref(
        name: string,
    ): DashboardRef {
        return new DashboardRef(
            this.namespaceName,
            name!,
        );
    }

    public getAttrDashboardId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.DashboardId",
            null,
        );
    }
}
