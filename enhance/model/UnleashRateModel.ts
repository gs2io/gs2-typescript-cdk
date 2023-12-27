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
import UnleashRateEntryModel from "./UnleashRateEntryModel";
import { UnleashRateModelOptions } from "./options/UnleashRateModelOptions";

export default class UnleashRateModel {
    private readonly name: string;
    private readonly targetInventoryModelId: string;
    private readonly gradeModelId: string;
    private readonly gradeEntries: UnleashRateEntryModel[];
    private readonly description: string|null = null;
    private readonly metadata: string|null = null;

    public constructor(
        name: string,
        targetInventoryModelId: string,
        gradeModelId: string,
        gradeEntries: UnleashRateEntryModel[],
        options: UnleashRateModelOptions|null = null,
    ) {
        this.name = name;
        this.targetInventoryModelId = targetInventoryModelId;
        this.gradeModelId = gradeModelId;
        this.gradeEntries = gradeEntries;
        this.description = options?.description ?? null;
        this.metadata = options?.metadata ?? null;
    }

    public properties(
    ): {[name: string]: any} {
        let properties: {[name: string]: any} = {};

        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.description != null) {
            properties["description"] = this.description;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.targetInventoryModelId != null) {
            properties["targetInventoryModelId"] = this.targetInventoryModelId;
        }
        if (this.gradeModelId != null) {
            properties["gradeModelId"] = this.gradeModelId;
        }
        if (this.gradeEntries != null) {
            properties["gradeEntries"] = this.gradeEntries.map(v => v.properties(
                ));
        }

        return properties;
    }
}
