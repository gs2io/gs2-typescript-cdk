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

import StageRef from "../ref/StageRef";
import { StageStatus } from "./enums/StageStatus";

import { StageOptions } from "./options/StageOptions";

export default class Stage extends CdkResource {
    private readonly stack: Stack;
    private readonly ownerId: string;
    private readonly name: string;
    private readonly sortNumber: number;
    private readonly sourceStageName: string|null = null;

    public constructor(
        stack: Stack,
        ownerId: string,
        name: string,
        sortNumber: number,
        options: StageOptions|null = null,
    ) {
        super(
            "Freeze_Stage_" + name
        );

        this.stack = stack;
        this.ownerId = ownerId;
        this.name = name;
        this.sortNumber = sortNumber;
        this.sourceStageName = options?.sourceStageName ?? null;
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
        return "GS2::Freeze::Stage";
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.ownerId != null) {
            properties["OwnerId"] = this.ownerId;
        }
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.sourceStageName != null) {
            properties["SourceStageName"] = this.sourceStageName;
        }
        if (this.sortNumber != null) {
            properties["SortNumber"] = this.sortNumber;
        }

        return properties;
    }

    public ref(
    ): StageRef {
        return new StageRef(
            this.name!,
        );
    }

    public getAttrStageId(
    ): GetAttr {
        return new GetAttr(
            this,
            "Item.StageId",
            null,
        );
    }
}
