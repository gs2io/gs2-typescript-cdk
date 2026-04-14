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

import {CdkResource, Stack} from "../../core/model";
import {GetAttr} from "../../core/func";

import FacetModelRef from "../ref/FacetModelRef";
import { FacetModelType } from "./enums/FacetModelType";

import { FacetModelOptions } from "./options/FacetModelOptions";

export default class FacetModel extends CdkResource {
    private readonly stack: Stack;
    private readonly namespaceName: string;
    private readonly field: string;
    private readonly type: FacetModelType;
    private readonly displayName: string;
    private readonly order: number|null = null;

    public constructor(
        stack: Stack,
        namespaceName: string,
        field: string,
        type: FacetModelType,
        displayName: string,
        options: FacetModelOptions|null = null,
    ) {
        super(
            "Log_FacetModel_" + field
        );

        this.stack = stack;
        this.namespaceName = namespaceName;
        this.field = field;
        this.type = type;
        this.displayName = displayName;
        this.order = options?.order ?? null;
        stack.addResource(
            this,
        );
    }


    public alternateKeys(
    ) {
        return "field";
    }

    public resourceType(
    ): string {
        return "GS2::Log::FacetModel";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.namespaceName != null) {
            properties["NamespaceName"] = this.namespaceName;
        }
        if (this.field != null) {
            properties["Field"] = this.field;
        }
        if (this.type != null) {
            properties["Type"] = this.type;
        }
        if (this.displayName != null) {
            properties["DisplayName"] = this.displayName;
        }
        if (this.order != null) {
            properties["Order"] = this.order;
        }

        return properties;
    }

    public ref(
    ): FacetModelRef {
        return new FacetModelRef(
            this.namespaceName,
            this.field!,
        );
    }

    public getAttrFacetModelId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.FacetModelId",
            null,
        );
    }
}
