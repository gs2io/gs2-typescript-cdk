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
import SlotModel from "./SlotModel";
import FormModel from "./FormModel";
import { MoldModelOptions } from "./options/MoldModelOptions";

export default class MoldModel {
    private readonly name: string;
    private readonly initialMaxCapacity: number;
    private readonly maxCapacity: number;
    private readonly formModel: FormModel;
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        initialMaxCapacity: number,
        maxCapacity: number,
        formModel: FormModel,
        options: MoldModelOptions|null = null,
    ) {
        this.name = name;
        this.initialMaxCapacity = initialMaxCapacity;
        this.maxCapacity = maxCapacity;
        this.formModel = formModel;
        this.metadata = options?.metadata ?? null;
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
        if (this.initialMaxCapacity != null) {
            properties["initialMaxCapacity"] = this.initialMaxCapacity;
        }
        if (this.maxCapacity != null) {
            properties["maxCapacity"] = this.maxCapacity;
        }
        if (this.formModel != null) {
            properties["formModel"] = this.formModel?.properties(
            );
        }

        return properties;
    }
}
